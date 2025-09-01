<<<<<<< HEAD
=======
import { Evento, FormaDePago } from "../generated/prisma";
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
import { Socio } from "./Socio";

export interface Entrada {
    id: number;
    eventoId: number;          
    cantidad: number;
    precioUnitario: number;
    total: number;
    fechaCompra: Date;
<<<<<<< HEAD
    socio: Socio;  
    ubicacion: string;                
    createdAt?: Date;
=======
    socioId: number| null;
    socio?: Socio | null ;                  
    createdAt?: Date;
    formaDePago: FormaDePago;
    comprobanteUrl?: string | null
    evento: Evento
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
}

export interface CreateEntradaRequest {
    eventoId: number;
    cantidad: number;
    precioUnitario: number;
    total: number;
    socioId: number;
<<<<<<< HEAD
    categoria: string;
    ubicacion: string;
=======
    formaDePago: FormaDePago;
    comprobanteUrl?: string
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
}

export interface UpdateEntradaRequest {
  eventoId?: number;
  cantidad?: number;
  precioUnitario?: number;
  total?: number;
  socioId?: number;
<<<<<<< HEAD
  categoria?: string;
  ubicacion?: string;
=======
  formaDePago: FormaDePago;
  comprobanteUrl?: string
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

}

export interface EntradaResponse {
  entrada: Entrada;
  message: string;
}

export interface EntradaListResponse {
  entradas: Entrada[];
  total: number;
}
