import { PrismaClient, $Enums } from "../../generated/prisma";

const prisma = new PrismaClient();

type ComprobanteLite = { id: number; url: string | null; activo: boolean };

type EstadoUi = "Pendiente" | "En Revisión" | "Aprobada" | "Rechazada";

/** Mapea estado de la DB → etiqueta usada en la UI del Admin */
function toUiEstado(
  estadoDb: string | null,
  comprobantes: ComprobanteLite[] | null
): EstadoUi {
  const e = String(estadoDb || "").toUpperCase();
  const tieneActivo =
    Array.isArray(comprobantes) && comprobantes.some((c) => c.activo);

  if (e === "EN_REVISION") return "En Revisión";
  if (tieneActivo && (e === "PENDIENTE" || e === "VENCIDA")) return "En Revisión";
  if (e === "PAGADA" || e === "APROBADA") return "Aprobada";
  if (e === "RECHAZADA") return "Rechazada";
  return "Pendiente";
}

//  Listado para CuotasAdmin 
export async function listCuotasAdmin() {
  const filas = await prisma.cuota.findMany({
    orderBy: { id: "asc" },
    select: {
      id: true,
      monto: true,
      estado: true,
      socio_id: true,
      created_at: true,
      fecha_pago: true,
      metodo_pago: true,
      mes: true,
      Socio: {
        select: { id: true, nombre: true, apellido: true, dni: true, email: true },
      },
      comprobantes: { select: { id: true, url: true, activo: true } },
    },
  });

  return filas.map((f) => {
    const nombre =
      f.Socio?.nombre || f.Socio?.apellido
        ? `${f.Socio?.nombre ?? ""} ${f.Socio?.apellido ?? ""}`.trim()
        : `Socio ${f.socio_id}`;

    const comps = (f.comprobantes ?? []) as ComprobanteLite[];
    const uiEstado = toUiEstado(f.estado, comps);
    const activo = comps.find((c) => c.activo);

    return {
      id: f.id,
      nombre,
      dni: f.Socio?.dni ?? "",
      email: f.Socio?.email ?? "",
      monto: Number(f.monto),
      estadoUi: uiEstado,
      estadoDb: f.estado,
      avatar: Boolean(activo?.url),
      comprobanteUrl: activo?.url || null,
      mes: f.mes,
      raw: f,
    };
  });
}

export async function getDetalle(id: number) {
  return prisma.cuota.findUnique({
    where: { id },
    include: {
      Socio: true,
      comprobantes: true,
      // agrega aquí otras relaciones si lo necesitas
    },
  });
}

// Aprobar / Rechazar cuota
export async function setEstadoCuota(
  id: number,
  body: { estado: "Aprobada" | "Rechazada" },
  adminName: string
) {
  const cuota = await prisma.cuota.findUnique({ where: { id } });
  if (!cuota) throw new Error("Cuota no encontrada");

  const nuevoEstadoDb: $Enums.estado_cuota =
    body.estado === "Aprobada" ? "PAGADA" : "RECHAZADA";

  const updated = await prisma.cuota.update({
    where: { id },
    data: { estado: nuevoEstadoDb },
    select: { id: true, estado: true },
  });

  return {
    id: updated.id,
    estado: body.estado,
    fechaCambio: new Date().toISOString(),
    cambiadoPor: adminName,
  };
}

 // Generación de cuotas (para Generar Cuota con vista previa)
/** Socios únicos inscriptos en clases activas de una actividad */
async function listSociosByActividadId(actividadId: number): Promise<number[]> {
  const filas = await prisma.claseSocio.findMany({
    where: { Clase: { actividadId, activo: true } },
    select: { socioId: true },
    distinct: ["socioId"],
  });
  return filas.map((f) => f.socioId);
}

/** Actividades activas y distintas de un socio */
async function listActividadesBySocioId(socioId: number) {
  const inscripciones = await prisma.claseSocio.findMany({
    where: { socioId, Clase: { activo: true } },
    select: {
      Clase: {
        select: {
          actividad: { select: { id: true, nombre: true, monto: true, activo: true } },
        },
      },
    },
  });

  const mapa = new Map<number, { id: number; nombre: string; monto: number }>();
  for (const i of inscripciones) {
    const act = i.Clase?.actividad;
    if (act?.activo && !mapa.has(act.id)) {
      mapa.set(act.id, { id: act.id, nombre: act.nombre, monto: Number(act.monto) });
    }
  }
  return [...mapa.values()];
}

export type GenerarCuotasInput = {
  actividadId?: number;   
  mes: $Enums.Mes;           
  metodo_pago?: $Enums.FormaDePago | null;
  preview?: boolean;     
};

/** Genera (o previsualiza) cuotas:
 *  - Si ya existe una cuota para el socio+mes → se actualiza el monto (suma de actividades activas)
 *  - Si no existe → se crea
 */
export async function generarCuotas({
  actividadId,
  mes,
  metodo_pago = null,
  preview = false,
  }: GenerarCuotasInput) {
  // 1) Determinar universo de socios
  let socioIds: number[] = [];
  if (typeof actividadId === "number") {
    socioIds = await listSociosByActividadId(actividadId);
  } else {
    // todos los socios activos
    const socios = await prisma.socio.findMany({
      where: { estado: "ACTIVO" },
      select: { id: true },
    });
    socioIds = socios.map((s) => s.id);
  }

  // 2) Para cada socio, sumar monto de actividades activas a las que está inscripto
  let created = 0;
  let updated = 0;
  let skips = 0;

  const previewItems: Array<{
    socioId: number;
    actividades: { id: number; nombre: string; monto: number }[];
    total: number;
    accion: "create" | "update" | "skip";
  }> = [];

  for (const socioId of socioIds) {
    try {
      const actividades = await listActividadesBySocioId(socioId);
      const total = actividades.reduce((acc, a) => acc + Number(a.monto), 0);

      if (total <= 0) {
        skips++;
        if (preview) {
          previewItems.push({ socioId, actividades, total, accion: "skip" });
        }
        continue;
      }

      const existente = await prisma.cuota.findFirst({
        where: { socio_id: socioId, mes },
        select: { id: true },
      });

      if (preview) {
        previewItems.push({
          socioId,
          actividades,
          total,
          accion: existente ? "update" : "create",
        });
        continue;
      }

      if (!existente) {
        await prisma.cuota.create({
          data: {
            socio_id: socioId,
            mes,
            monto: total,
            estado: "PENDIENTE" as $Enums.estado_cuota,
            metodo_pago: metodo_pago ?? "CBU", // default
          },
        });
        created++;
      } else {
        await prisma.cuota.update({
          where: { id: existente.id },
          data: { monto: total, 
                  ... metodo_pago !== null ? { metodo_pago } : {} },
        });
        updated++;
      }
    } catch (err) {
      skips++;
    }
  }

  return {
    processedSocios: socioIds.length,
    created,
    updated,
    skips,
    previewItems: preview ? previewItems : undefined,
  };
}