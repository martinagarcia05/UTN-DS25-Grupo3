import { Entrada } from "./entradas";

export interface Evento {
  id: number;
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
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

export interface EventoResponse {
    evento:Evento;
    entradas?: Entrada;
    message: string;
}

export interface EventoListResponse {
    eventos:Evento[];
    total: number;
}