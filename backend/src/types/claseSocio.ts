import { Clase } from "./clase";
import { Socio } from "./Socio";

export interface ClaseSocio {
  id: number;
  claseId: number;
  socioId: number;
  clase?: Clase;
  socio?: Socio;
}

export interface CreateClaseSocioRequest {
  claseId: number;
  socioId: number;
}

export interface UpdateClaseSocioRequest {
  claseId?: number;
  socioId?: number;
}

export interface ClaseSocioResponse {
  claseSocio: ClaseSocio;
  message: string;
}

export interface ClaseSocioListResponse {
  claseSocios: ClaseSocio[];
  total: number;
}
