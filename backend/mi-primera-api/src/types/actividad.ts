import { Clase } from "./clase";

export interface Actividad {
  id: number;
  nombre: string;
  monto: number;
  activo: boolean;
  clases?: Clase[];
  createdAt?: Date;
}

export interface CreateActividadRequest {
  nombre: string;
  monto: number;
  activo?: boolean;
}

export interface UpdateActividadRequest {
  nombre?: string;
  monto?: number;
  activo?: boolean;
}

export interface ActividadResponse {
  actividad: Actividad;
  message: string;
}

export interface ActividadListResponse {
  actividades: Actividad[];
  total: number;
}
