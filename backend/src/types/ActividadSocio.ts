
import { Socio } from "./Socio";
import { Actividad } from '../generated/prisma/index';

export interface ActividadSocio {
  id: number;
  actividadId: number;
  socioId: number;
  actividad?: Actividad;
  socio?: Socio;
}

export interface CreateActividadSocioRequest {
  actividadId: number;
  socioId: number;
}

export interface UpdateActividadSocioRequest {
  actividadId?: number;
  socioId?: number;
}

export interface ActividadSocioResponse {
  actividadSocio: ActividadSocio;
  message: string;
}

export interface ActividadSocioListResponse {
  actividadSocios: ActividadSocio[];
  total: number;
}
