import { PrismaClient, $Enums } from '@prisma/client';
import { EstadoAdmin, GetComprobanteDetalleResponse, UpdateEstadoCuotaRequest, UpdateEstadoCuotaResponse } from '../types/cuota';
import type { Mes } from '@prisma/client';

const prisma = new PrismaClient();
const toDDMMYYYY = (d = new Date()) => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;

export async function getCuotaDetalle(id: number): Promise<GetComprobanteDetalleResponse> {
  const cuota = await prisma.cuota.findUnique({
    where: { id },
    include: {
      Socio: {
        select: { nombre: true, apellido: true }
      },
      comprobante: {
        where: { activo: true },
        select: { url: true }
      }
    }
  });

  if (!cuota) {
    throw Object.assign(new Error('Cuota no encontrada'), { statusCode: 404 });
  }

  const comprobanteUrl = cuota.comprobante?.[0]?.url;

  return {
    id: cuota.id,
    socioNombre: `${cuota.Socio.nombre} ${cuota.Socio.apellido}`,
    mes: cuota.mes as Mes,
    monto: cuota.monto.toNumber(),
    estado: cuota.estado as EstadoAdmin,
    comprobanteUrl,
    fechaCarga: comprobanteUrl ? toDDMMYYYY() : undefined,
    ...(comprobanteUrl ? {} : { message: 'Comprobante no cargado' }),
  };
}

export async function updateEstadoCuota(
  id: number,
  body: UpdateEstadoCuotaRequest,
  adminName: string
): Promise<UpdateEstadoCuotaResponse> {
  const cuota = await prisma.cuota.findUnique({
    where: { id }
  });

  if (!cuota) {
    throw Object.assign(new Error('Cuota no encontrada'), { statusCode: 404 });
  }

  if (body.estado !== 'Aprobada' && body.estado !== 'Rechazada') {
    throw Object.assign(new Error('Estado inválido'), { statusCode: 400 });
  }
  if (body.estado === 'Rechazada' && !body.motivo?.trim()) {
    throw Object.assign(new Error('Motivo es requerido para rechazar'), { statusCode: 400 });
  }

  const yaEstaba = cuota.estado === (body.estado === 'Aprobada' ? 'PAGADA' : 'RECHAZADA');
  
  const nuevoEstado = body.estado === 'Aprobada' ? 'PAGADA' : 'RECHAZADA';
  
  await prisma.cuota.update({
    where: { id },
    data: { estado: nuevoEstado }
  });

  return {
    id: cuota.id,
    estado: body.estado,
    fechaCambio: toDDMMYYYY(new Date()),
    cambiadoPor: adminName,
    ...(yaEstaba ? { message: 'Estado ya estaba asignado' } : {})
  };
}
