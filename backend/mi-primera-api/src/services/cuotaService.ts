import { GetCuotasRequest, GetCuotasResponse, EnviarComprobanteRequest, EnviarComprobanteResponse } from '../types/cuota';
import fs from 'fs';
import path from 'path';

let cuotas: {
  socioId: number;
  cuotaId: number;
  nroCuota: number;
  mes: string;
  vencimiento: string;
  monto: number;
  estado: 'Aprobada' | 'Vencida' | 'En revisión';
  comprobanteUrl?: string;
}[] = [
  { socioId: 1, cuotaId: 1, nroCuota: 1, mes: 'Julio 2025', vencimiento: '10/07/2025', monto: 1000, estado: 'Aprobada' },
  { socioId: 1, cuotaId: 2, nroCuota: 2, mes: 'Agosto 2025', vencimiento: '10/08/2025', monto: 1000, estado: 'Vencida' },
  { socioId: 1, cuotaId: 3, nroCuota: 3, mes: 'Septiembre 2025', vencimiento: '10/09/2025', monto: 1000, estado: 'En revisión' }
];

export async function getCuotas(id: number, request: GetCuotasRequest): Promise<GetCuotasResponse> {
  let filteredCuotas = cuotas.filter(c => c.socioId === id);
  if (request.mes) {
    filteredCuotas = filteredCuotas.filter(c => c.mes === request.mes);
  }
  filteredCuotas.sort((a, b) => new Date(a.vencimiento).getTime() - new Date(b.vencimiento).getTime());
  return {
    cuotas: filteredCuotas.map(c => ({ nroCuota: c.nroCuota, mes: c.mes, vencimiento: c.vencimiento, monto: c.monto, estado: c.estado })),
    message: filteredCuotas.length > 0 ? undefined : 'No se encontraron cuotas'
  };
}

export async function enviarComprobante(cuotaId: number, request: EnviarComprobanteRequest): Promise<EnviarComprobanteResponse> {
  const cuotaIndex = cuotas.findIndex(c => c.cuotaId === cuotaId);
  if (cuotaIndex === -1) {
    const error = new Error('Cuota no encontrada');
    (error as any).statusCode = 404;
    throw error;
  }
  const file = request.comprobante;
  if (!file.originalname?.match(/\.(jpg|jpeg|png|pdf)$/i)) {
    const error = new Error('Formato de archivo inválido (solo JPG, PNG, PDF)');
    (error as any).statusCode = 400;
    throw error;
  }
  if (file.size && file.size > 5 * 1024 * 1024) {
    const error = new Error('Archivo demasiado grande (máximo 5MB)');
    (error as any).statusCode = 400;
    throw error;
  }
  const uploadDir = path.join(__dirname, '../../uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
  const filePath = path.join(uploadDir, file.originalname || 'comprobante');
  if (file.buffer) {
    fs.writeFileSync(filePath, file.buffer);
  }
  const comprobanteUrl = `/uploads/${file.originalname || 'comprobante'}`;
  cuotas[cuotaIndex].comprobanteUrl = comprobanteUrl;
  cuotas[cuotaIndex].estado = 'En revisión';
  return { success: true };
}