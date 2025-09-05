import { PrismaClient } from '../generated/prisma';
import { $Enums } from '../generated/prisma';

const prisma = new PrismaClient();

type ActividadLite = { id: number; nombre: string; monto: number };
type DetalleItem = { tipo: 'base' | 'actividad'; id?: number; nombre?: string; monto: number };

/** Actividades ACTIVAS y DISTINTAS en las que está inscripto un socio.
 * OJO: relaciones con Mayúscula (Clase, Actividad) como aparecen en tu client.
 */
async function listActividadesBySocioId(socioId: number): Promise<ActividadLite[]> {
  const inscripciones = await prisma.claseSocio.findMany({
    where: { socioId },
    include: {
      Clase: {
        include: {
          actividad: {
            select: { id: true, nombre: true, monto: true, activo: true },
          },
        },
      },
    },
  });

  // filtra Clase.activo y Actividad.activo, dedup por actividad.id
  const mapa = new Map<number, ActividadLite>();
  for (const i of inscripciones) {
    const clase = i.Clase;
    const act = clase?.actividad;
    if (clase?.activo && act?.activo && !mapa.has(act.id)) {
      mapa.set(act.id, { id: act.id, nombre: act.nombre, monto: Number(act.monto) });
    }
  }
  return [...mapa.values()];
}

/** Socios únicos inscriptos en clases ACTIVAS de una actividad (disparadora). */
async function listSociosByActividadId(actividadId: number): Promise<number[]> {
  const filas = await prisma.claseSocio.findMany({
    where: { Clase: { actividadId, activo: true } },
    select: { socioId: true },
    distinct: ['socioId'],
  });
  return filas.map(f => f.socioId);
}

/** Upsert de la cuota MENSUAL consolidada por (socio, mes).
 * total = montoBase + Σ(actividades activas y distintas del socio)
 * Si el socio no tiene actividades → total = montoBase (ya contemplado)
 */
export async function upsertCuotaMensualConsolidada(
  socioId: number,
  mes: $Enums.Mes,
  montoBase: number,
  hasComprobante: boolean
): Promise<{ created: boolean; updated: boolean; total: number; detalle: DetalleItem[] }> {
  const acts = await listActividadesBySocioId(socioId);
  const sumaActs = acts.reduce((acc, a) => acc + Number(a.monto), 0);
  const total = Number(montoBase) + sumaActs;

  const detalle: DetalleItem[] = [
    { tipo: 'base', monto: Number(montoBase) },
    ...acts.map(a => ({ tipo: 'actividad' as const, id: a.id, nombre: a.nombre, monto: Number(a.monto) })),
  ];

  const metPago = hasComprobante ? $Enums.forma_de_pago.CBU : $Enums.forma_de_pago.EFECTIVO;

  // Buscar la cuota existente
  const prev = await prisma.cuota.findFirst({
    where: { socio_id: socioId, mes },
  });

  if (!prev) {
    // Si no existe, crear la cuota y luego sus actividades relacionadas
    const newCuota = await prisma.cuota.create({
      data: {
        socio_id: socioId,
        mes,
        monto: total,
        estado: 'PENDIENTE',
        metodo_pago: metPago,
      },
    });

    for (const act of acts) {
      await prisma.cuotaXactividad.create({
        data: {
          cuotaId: newCuota.id,
          actividadId: act.id,
          monto: act.monto,
        },
      });
    }

    return { created: true, updated: false, total, detalle };
  } else {
    // Si existe, actualizar la cuota
    await prisma.cuota.update({
      where: { id: prev.id },
      data: {
        monto: total,
      },
    });

    // Opcional: podrías querer borrar o actualizar los registros de CuotaActividad si las actividades de un socio cambian de un mes a otro.
    // Para simplificar, asumimos que no es necesario.

    return { created: false, updated: true, total, detalle };
  }
}

/** Generar/actualizar cuota única para TODOS los socios de la actividad disparadora. */
export async function generarCuotasConsolidadasPorActividad(
  actividadId: number,
  mes: $Enums.Mes,
  montoBase: number,
  preview = false
): Promise<{
  processedSocios: number;
  created: number;
  updated: number;
  skips: number;
  previewItems?: Array<{ socioId: number; total: number; detalle: DetalleItem[] }>;
}> {
  const socioIds = await listSociosByActividadId(actividadId);

  let created = 0, updated = 0, skips = 0;
  const previewItems: Array<{ socioId: number; total: number; detalle: DetalleItem[] }> = [];

  for (const socioId of socioIds) {
    try {
      const acts = await listActividadesBySocioId(socioId);
      const sumaActs = acts.reduce((acc, a) => acc + Number(a.monto), 0);
      const total = Number(montoBase) + sumaActs;
      const detalle: DetalleItem[] = [
        { tipo: 'base', monto: Number(montoBase) },
        ...acts.map(a => ({ tipo: 'actividad' as const, id: a.id, nombre: a.nombre, monto: Number(a.monto) })),
      ];

      if (preview) {
        previewItems.push({ socioId, total, detalle });
        continue;
      }

      const r = await upsertCuotaMensualConsolidada(socioId, mes, montoBase, false);
      if (r.created) created++; else if (r.updated) updated++; else skips++;
    } catch {
      skips++;
    }
  }

  return { processedSocios: socioIds.length, created, updated, skips, previewItems: preview ? previewItems : undefined };
}

export async function listaCuotas(
  filtro: { estado?: $Enums.estado_cuota; nombre?: string }
) {
  const where: any = {};
  if (filtro.estado) {
    where.estado = filtro.estado;
  }
  if (filtro.nombre) {
    where.Socio = { nombre: { contains: filtro.nombre, mode: 'insensitive' } };
  }

  const cuotas = await prisma.cuota.findMany({
    where,
    include: {
      Socio: {
        select: { nombre: true, apellido: true },
      },
      // Incluir las actividades relacionadas a través de la tabla de unión
      actividades: {
        include: {
          Actividad: true,
        },
      },
    },
    orderBy: { created_at: 'desc' },
  });

  return cuotas.map(c => ({
    ...c,
    nombreSocio: `${c.Socio?.nombre} ${c.Socio?.apellido}`,
  }));
}

export async function getCuotaDetalle(cuotaId: number) {
  const cuota = await prisma.cuota.findUnique({
    where: { id: cuotaId },
    include: {
      Socio: true,
      // Incluir las actividades relacionadas a través de la tabla de unión
      actividades: {
        include: {
          Actividad: true,
        },
      },
      comprobante: true,
    },
  });
  return cuota;
}

export async function updateEstadoCuota(
  cuotaId: number,
  data: { estado: $Enums.estado_cuota },
  adminName: string
) {
  const cuota = await prisma.cuota.update({
    where: { id: cuotaId },
    data: {
      estado: data.estado,
    },
  });
  return cuota;
}