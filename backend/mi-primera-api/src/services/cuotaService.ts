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
  estado: 'Aprobada' | 'Vencida' | 'En revisión' | 'Pendiente';
  comprobanteUrl?: string;
}[] = [
  { socioId: 1, cuotaId: 1, nroCuota: 1, mes: 'Julio 2025', vencimiento: '10/07/2025', monto: 1000, estado: 'Aprobada' },
  { socioId: 1, cuotaId: 2, nroCuota: 2, mes: 'Agosto 2025', vencimiento: '10/08/2025', monto: 1000, estado: 'Vencida' },
  { socioId: 1, cuotaId: 3, nroCuota: 3, mes: 'Septiembre 2025', vencimiento: '10/09/2025', monto: 1000, estado: 'En revisión' },
  { socioId: 1, cuotaId: 4, nroCuota: 4, mes: 'Octubre 2025', vencimiento: '10/10/2025', monto: 1000, estado: 'Pendiente' },
  { socioId: 1, cuotaId: 5, nroCuota: 5, mes: 'Noviembre 2025', vencimiento: '15/11/2025', monto: 1000, estado: 'Pendiente' },
  { socioId: 1, cuotaId: 6, nroCuota: 6, mes: 'Diciembre 2025', vencimiento: '20/12/2025', monto: 1000, estado: 'Pendiente' }
];


function determinarEstadoCuota(vencimiento: string): 'Pendiente' | 'Vencida' {
  // Convertir la fecha de vencimiento del formato DD/MM/YYYY a Date
  const [dia, mes, año] = vencimiento.split('/');
  const fechaVencimiento = new Date(parseInt(año), parseInt(mes) - 1, parseInt(dia));
  
  // Obtener la fecha actual sin horas para comparar solo fechas
  const fechaActual = new Date();
  fechaActual.setHours(0, 0, 0, 0);
  
  // Comparar fechas
  if (fechaVencimiento >= fechaActual) {
    return 'Pendiente';
  }
  
  return 'Vencida';
}

// Función helper para obtener la fecha actual en formato legible
function obtenerFechaActualFormateada(): string {
  const ahora = new Date();
  const dia = ahora.getDate().toString().padStart(2, '0');
  const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
  const año = ahora.getFullYear();
  return `${dia}/${mes}/${año}`;
}

// Función para actualizar el estado de todas las cuotas basándose en la fecha actual
function actualizarEstadosCuotas() {
  const fechaActual = obtenerFechaActualFormateada();
  console.log(`Actualizando estados de cuotas. Fecha actual: ${fechaActual}`);
  
  cuotas = cuotas.map(cuota => {
    // Solo actualizar estados que pueden cambiar por fecha
    if (cuota.estado === 'Pendiente' || cuota.estado === 'Vencida') {
      const estadoAnterior = cuota.estado;
      const estadoDeterminado = determinarEstadoCuota(cuota.vencimiento);
      
      if (estadoAnterior !== estadoDeterminado) {
        console.log(`Cuota ${cuota.cuotaId} (${cuota.mes}): ${estadoAnterior} → ${estadoDeterminado} (Vencimiento: ${cuota.vencimiento})`);
      }
      
      return { ...cuota, estado: estadoDeterminado };
    }
    return cuota;
  });
}

export async function getCuotas(id: number, request: GetCuotasRequest): Promise<GetCuotasResponse> {
  // Actualizar estados antes de filtrar
  actualizarEstadosCuotas();
  
  let filteredCuotas = cuotas.filter(c => c.socioId === id);
  
  if (request.mes) {
    filteredCuotas = filteredCuotas.filter(c => c.mes === request.mes);
  }
  filteredCuotas.sort((a, b) => new Date(a.vencimiento.split('/').reverse().join('-')).getTime() - new Date(b.vencimiento.split('/').reverse().join('-')).getTime());
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

export async function getTodasLasCuotas(): Promise<{
  cuotas: any[];
  fechaActual: string;
  debug: string[];
}> {
  // Actualizar estados antes de retornar
  actualizarEstadosCuotas();
  
  const fechaActual = obtenerFechaActualFormateada();
  const debug: string[] = [];
  
  // Agregar información de debug para cada cuota
  const cuotasConDebug = cuotas.map(cuota => {
    const estadoCalculado = determinarEstadoCuota(cuota.vencimiento);
    const necesitaActualizacion = (cuota.estado === 'Pendiente' || cuota.estado === 'Vencida') && cuota.estado !== estadoCalculado;
    
    if (necesitaActualizacion) {
      debug.push(`Cuota ${cuota.cuotaId} necesita actualización: ${cuota.estado} → ${estadoCalculado}`);
    }
    
    return {
      ...cuota,
      estadoCalculado,
      necesitaActualizacion
    };
  });
  
  return {
    cuotas: cuotasConDebug,
    fechaActual,
    debug
  };
}