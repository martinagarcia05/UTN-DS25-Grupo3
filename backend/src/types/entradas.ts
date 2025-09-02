import { Evento, FormaDePago } from "../generated/prisma";
import { Socio } from "./Socio";

export interface Entrada {
    id: number;
    eventoId: number;          
    cantidad: number;
    precioUnitario: number;
    total: number;
    fechaCompra: Date;
    socioId: number| null;
    socio?: Socio | null ;                  
    createdAt?: Date;
    formaDePago: FormaDePago;
    comprobanteUrl?: string | null
    evento: Evento
}

export interface CreateEntradaRequest {
    eventoId: number;
    cantidad: number;
    precioUnitario: number;
    total: number;
    socioId: number;
    formaDePago: FormaDePago;
    comprobanteUrl?: string
}

export interface UpdateEntradaRequest {
  eventoId?: number;
  cantidad?: number;
  precioUnitario?: number;
  total?: number;
  socioId?: number;
  formaDePago: FormaDePago;
  comprobanteUrl?: string

}

export interface EntradaResponse {
  entrada: Entrada;
  message: string;
}

export interface EntradaListResponse {
  entradas: Entrada[];
  total: number;
}
