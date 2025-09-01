import { CuotaRow, EstadoAdmin, GetComprobanteDetalleResponse, UpdateEstadoCuotaRequest, UpdateEstadoCuotaResponse } from '../types/cuotasAdminTypes';
import { cuotas } from './cuotasAdminService';
const toDDMMYYYY = (d = new Date()) => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;

export async function getCuotaDetalle(id: number): Promise<GetComprobanteDetalleResponse> {
  const c = cuotas.find(x => x.id === id);
  if (!c) throw Object.assign(new Error('Cuota no encontrada'), { statusCode: 404 });

  return {
    id: c.id,
    socioNombre: c.socioNombre,
    mes: c.mes,
    monto: c.monto,
    estado: c.estado,
    comprobanteUrl: c.comprobanteUrl,
    fechaCarga: c.fechaCarga,
    ...(c.comprobanteUrl ? {} : { message: 'Comprobante no cargado' }),
  };
}

export async function updateEstadoCuota(
  id: number,
  body: UpdateEstadoCuotaRequest,
  adminName: string
): Promise<UpdateEstadoCuotaResponse> {
  const c = cuotas.find(x => x.id === id);
  if (!c) throw Object.assign(new Error('Cuota no encontrada'), { statusCode: 404 });

  if (body.estado !== 'Aprobada' && body.estado !== 'Rechazada') {
    throw Object.assign(new Error('Estado inválido'), { statusCode: 400 });
  }
  if (body.estado === 'Rechazada' && !body.motivo?.trim()) {
    throw Object.assign(new Error('Motivo es requerido para rechazar'), { statusCode: 400 });
  }

  const yaEstaba = c.estado === body.estado;
  c.estado = body.estado;

  return {
    id: c.id,
    estado: c.estado,
    fechaCambio: toDDMMYYYY(new Date()),
    cambiadoPor: adminName,
    ...(yaEstaba ? { message: 'Estado ya estaba asignado' } : {})
  };
}
