import { Socio } from "./Socio";

export type EstadoEntrada = "ACTIVA" | "USADA" | "CANCELADA";

export interface Entrada {
    id: number;
    eventoId: number;          
    cantidad: number;
    precioUnitario: number;
    total: number;
    estado: EstadoEntrada;
    fechaCompra: Date;
    socio: Socio;  
    categoria: string;
    ubicacion: string;                
    createdAt?: Date;
}

export interface CreateEntradaRequest {
    eventoId: number;
    cantidad: number;
    precioUnitario: number;
    total: number;
    socioId: number;
    categoria: string;
    ubicacion: string;
}

export interface UpdateEntradaRequest {
  eventoId?: number;
  cantidad?: number;
  precioUnitario?: number;
  total?: number;
  estado?: EstadoEntrada;
  socioId?: number;
  categoria?: string;
  ubicacion?: string;

}

export interface EntradaResponse {
  entrada: Entrada;
  message: string;
}

export interface EntradaListResponse {
  entradas: Entrada[];
  total: number;
}
