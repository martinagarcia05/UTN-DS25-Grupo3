export type EstadoAdmin = 'Aprobada' | 'Pendiente' | 'Rechazada';

export interface CuotaRow {
  id: number;
  socioNombre: string;
  estado: EstadoAdmin;
  mes: string;
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
  mes: string;        // '..., Mayo, Junio, Julio, ...'
  monto: number;
  estado: EstadoAdmin;
  comprobanteUrl?: string;
  fechaCarga?: string;  // 'dd/mm/aaaa'
  message?: string;
}

export interface UpdateEstadoCuotaRequest {
  estado: Extract<EstadoAdmin, 'Aprobada' | 'Rechazada'>;
  motivo?: string;
}
export interface UpdateEstadoCuotaResponse {
  id: number;
  estado: Extract<EstadoAdmin, 'Aprobada' | 'Rechazada'>;
  fechaCambio: string; // 'dd/mm/aaaa'
  cambiadoPor: string; // nombre del admin (de auth)
}
