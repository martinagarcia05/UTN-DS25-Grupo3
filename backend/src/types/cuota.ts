import type { $Enums } from '../generated/prisma';

type Mes = $Enums.Mes;
type EstadoCuota = $Enums.estado_cuota;

// Tipos para Socio
export interface Cuota {
  nroCuota: number;
  mes: string;
  fecha_vencimiento: string;
  monto: number;
  estado: 'PAGADA' | 'VENCIDA' | 'EN_REVISION' | 'PENDIENTE' | 'RECHAZADA';
  comprobanteUrl?: string;
}

export interface GetCuotasRequest {
  mes?: string;
}

export interface GetCuotasResponse {
  cuotas: Cuota[];
  message?: string;
}

export interface EnviarComprobanteRequest {
  comprobante: Express.Multer.File;
}

export interface EnviarComprobanteResponse {
  success: boolean;
  message?: string;
}

// Tipos para Admin
export type EstadoAdmin = 'PAGADA' | 'VENCIDA' | 'EN_REVISION' | 'PENDIENTE' | 'RECHAZADA';

export interface CuotaRow {
  id: number;
  socioNombre: string;
  estado: EstadoAdmin;
  mes: Mes;
  monto: number;
  comprobanteUrl?: string;
  fechaCarga?: string;
}

export interface CuotaAdminItem {
  id: number;
  socioNombre: string;
  estado: EstadoAdmin;
  comprobanteUrl?: string;
  avatar?: boolean;
}

export interface GetCuotasAdminQuery {
  estado?: EstadoAdmin | 'Todas';
  nombre?: string;
}

export interface GetCuotasAdminResponse {
  cuotas: CuotaAdminItem[];
}

export interface GetComprobanteDetalleResponse {
  id: number;
  socioNombre: string;
  mes: Mes;
  monto: number;
  estado: EstadoAdmin;
  comprobanteUrl?: string;
  fechaCarga?: string;
  message?: string;
}

export interface UpdateEstadoCuotaRequest {
  estado: Extract<EstadoAdmin, 'Aprobada' | 'Rechazada'>;
  motivo?: string;
}

export interface UpdateEstadoCuotaResponse {
  id: number;
  estado: Extract<EstadoAdmin, 'Aprobada' | 'Rechazada'>;
  fechaCambio: string;
  cambiadoPor: string;
}

export interface GenerarCuotasRequest {
  actividadId: number;
  mes: Mes;
  montoBase: number;
  preview?: boolean;
}

export type DetalleCuota = {
  tipo: 'base' | 'actividad';
  id?: number;
  nombre?: string;
  monto: number;
}

export interface PreviewItem {
  socioId: number;
  total: number;
  detalle: DetalleCuota[];
}

export interface GenerarCuotasResponse {
  processedSocios: number;
  created: number;
  updated: number;
  skips: number;
  previewItems?: PreviewItem[];
}

export interface UpsertPorSocioResult {
  socioId: number;
  created: boolean;
  updated: boolean;
  skipped?: boolean;
}
