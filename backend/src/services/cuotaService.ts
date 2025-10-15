import { PrismaClient, $Enums } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { Cuota, GetCuotasRequest, GetCuotasResponse } from '../types/cuota';

const prisma = new PrismaClient();

// Función para determinar el estado de una cuota
function determinarEstadoCuota(vencimiento: string): $Enums.estado_cuota {
  const [dia, mes, año] = vencimiento.split('/');
  const fechaVencimiento = new Date(parseInt(año), parseInt(mes) - 1, parseInt(dia));
  const fechaActual = new Date();
  fechaActual.setHours(0, 0, 0, 0);

  if (fechaVencimiento >= fechaActual) {
    return $Enums.estado_cuota.PENDIENTE;
  }

  return $Enums.estado_cuota.VENCIDA;
}

// Obtener cuotas de un socio
export async function getCuotas(id: number, request: GetCuotasRequest): Promise<GetCuotasResponse> {
  let cuotas = await prisma.cuota.findMany({
    where: { socio_id: id },
    orderBy: { fecha_vencimiento: 'asc' }, // Asegúrate de ordenar las cuotas por fecha
  });

  if (request.mes) {
    cuotas = cuotas.filter((c) => c.mes === request.mes);
  }

  // Calculamos nroCuota en base al orden de las cuotas
  const cuotasConNroCuota = cuotas.map((cuota: any, index: number) => {  // 'cuota' es tipado como 'any' para acceder a sus propiedades de forma flexible
    const fechaVencimientoStr = cuota.fecha_vencimiento.toISOString().split('T')[0]; // Formato yyyy-mm-dd

    return {
      nroCuota: index + 1,  // Asumimos que nroCuota es el índice más 1
      mes: cuota.mes || '',
      fecha_vencimiento: fechaVencimientoStr,  // Convertimos Date a string
      monto: cuota.monto.toNumber(),  // Convertimos 'Decimal' a 'number'
      estado: determinarEstadoCuota(fechaVencimientoStr),  // Usamos la fecha como string para determinar el estado
    };
  });

  return {
    cuotas: cuotasConNroCuota,
    message: cuotasConNroCuota.length > 0 ? undefined : 'No se encontraron cuotas',
  };
}

// Enviar comprobante (socio)
export async function enviarComprobante(cuotaId: number, request: { comprobante: Express.Multer.File }): Promise<{ success: boolean; message?: string }> {
  const cuota = await prisma.cuota.findUnique({ where: { id: cuotaId } });

  if (!cuota) {
    throw new Error('Cuota no encontrada');
  }

  const file = request.comprobante;
  if (!file.originalname?.match(/\.(jpg|jpeg|png|pdf)$/i)) {
    throw new Error('Formato de archivo inválido (solo JPG, PNG, PDF)');
  }

  if (file.size && file.size > 5 * 1024 * 1024) {
    throw new Error('Archivo demasiado grande (máximo 5MB)');
  }

  const uploadDir = path.join(__dirname, '../../uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

  const filePath = path.join(uploadDir, file.originalname || 'comprobante');
  if (file.buffer) {
    fs.writeFileSync(filePath, file.buffer);
  }

  const comprobanteUrl = `/uploads/${file.originalname || 'comprobante'}`;

  // Corregimos el `where` para usar la clave compuesta (cuotaId y activo)
  const comprobante = await prisma.comprobante.upsert({
    where: {
      cuotaId_activo: {
        cuotaId: cuotaId,
        activo: true,
      },
    },
    update: {
      url: comprobanteUrl,
      activo: true,
    },
    create: {
      url: comprobanteUrl,
      activo: true,
      cuotaId: cuotaId,
    },
  });

  await prisma.cuota.update({
    where: { id: cuotaId },
    data: {
      comprobante: {
        connect: { id: comprobante.id },
      },
      estado: 'EN_REVISION',
    },
  });

  return { success: true };
}

// Función para obtener todas las cuotas (admin)
export async function getTodasLasCuotas(): Promise<{ cuotas: any[]; fechaActual: string; debug: string[] }> {
  const cuotas = await prisma.cuota.findMany({
    include: {
      Socio: {
        select: { id: true, nombre: true, apellido: true, dni: true, email: true },
      },
      comprobante: {
        select: { id: true, url: true, activo: true },
      },
    },
  });

  const fechaActual = new Date().toISOString();  // Asegura la fecha actual como string
  const debug: string[] = [];

  const cuotasConDebug = cuotas.map((cuota: any) => {  // 'cuota' es tipado como 'any' para poder acceder a las propiedades
    const fechaVencimientoStr = cuota.fecha_vencimiento.toISOString().split('T')[0];

    const estadoCalculado = determinarEstadoCuota(fechaVencimientoStr);
    const necesitaActualizacion = cuota.estado !== $Enums.estado_cuota[estadoCalculado];

    if (necesitaActualizacion) {
      debug.push(`Cuota ${cuota.id} necesita actualización: ${cuota.estado} → ${estadoCalculado}`);
    }

    return {
      ...cuota,
      estadoCalculado,
      necesitaActualizacion,
    };
  });

  return { cuotas: cuotasConDebug, fechaActual, debug };
}

// Función para aprobar o rechazar una cuota (admin)
export async function setEstadoCuota(id: number, estado: 'Aprobada' | 'Rechazada', adminName: string) {
  const cuota = await prisma.cuota.findUnique({ where: { id } });
  if (!cuota) throw new Error('Cuota no encontrada');

  const nuevoEstadoDb = estado === 'Aprobada' ? 'PAGADA' : 'RECHAZADA';

  const updated = await prisma.cuota.update({
    where: { id },
    data: { estado: nuevoEstadoDb },
  });

  return {
    id: updated.id,
    estado: estado,
    fechaCambio: new Date().toISOString(),
    cambiadoPor: adminName,
  };
}

// Función para generar cuotas (admin)
export async function generarCuotas(actividadId: number, mes: $Enums.Mes, metodo_pago: $Enums.FormaDePago | null = null, preview: boolean = false) {
  const socios = await prisma.socio.findMany({ where: { estado: 'ACTIVO' } });
  let created = 0;
  let updated = 0;
  let skips = 0;

  for (const socio of socios) {
    const actividades = await prisma.actividadSocio.findMany({
      where: { socioId: socio.id, actividadId: actividadId },
      select: {
        actividadId: true,
        actividad: {
          select: {
            monto: true,
          },
        },
      },
    });

    const total = actividades.reduce((acc: number, a: { actividad: { monto: number } }) => acc + a.actividad.monto, 0);

    if (total <= 0) {
      skips++;
      continue;
    }

    const existente = await prisma.cuota.findFirst({
      where: { socio_id: socio.id, mes: mes },
    });

    if (preview) {
      continue;
    }

    if (!existente) {
      await prisma.cuota.create({
        data: {
          socio_id: socio.id,
          mes: mes,
          monto: total,
          estado: 'PENDIENTE',
          metodo_pago: metodo_pago ?? 'CBU',
          fecha_vencimiento: new Date(),
        },
      });
      created++;
    } else {
      await prisma.cuota.update({
        where: { id: existente.id },
        data: { monto: total, metodo_pago: metodo_pago },
      });
      updated++;
    }
  }

  return {
    processedSocios: socios.length,
    created,
    updated,
    skips,
  };
}
