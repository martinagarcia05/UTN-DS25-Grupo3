import { Entrada } from "./entradas";

export interface Evento {
  id: number;
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
<<<<<<< HEAD
  entradasVendidas: number;
  montoTotal: number;
=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
  ubicacion: string;
  descripcion: string;
  entradas: Entrada[];
  createdAt?: Date;
}

export interface CreateEventoRequest {
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
  ubicacion: string;
  descripcion: string;
}

export interface UpdateEventoRequest {
  nombre?: string;
  fecha?: Date;
  horaInicio?: string;
  horaFin?: string;
  capacidad?: number;
  precioEntrada?: number;
  ubicacion?: string;
  descripcion?: string;
}

<<<<<<< HEAD

export interface EventoResponse {
    evento:Evento;
=======
export interface EventoResponse {
    evento:Evento;
    entradas?: Entrada;
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    message: string;
}

export interface EventoListResponse {
    eventos:Evento[];
    total: number;
}