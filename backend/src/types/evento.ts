import { Entrada } from "./entradas";
import { Actividad } from "./actividades";
import { Cancha } from "./canchas";

export interface Evento {
  id: number;
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
  actividadId: number;
  canchaId: number;
  descripcion: string;
  createdAt?: Date;
  actividad?: Actividad;   // 🔹 relación opcional
  cancha?: Cancha;         // 🔹 relación opcional
  entradas?: Entrada[];
}

export interface CreateEventoRequest {
  nombre: string;
  fecha: Date;
  horaInicio: string;
  horaFin: string;
  capacidad: number;
  precioEntrada: number;
  actividadId: number;  // 🔹 requerido al crear
  canchaId: number;     // 🔹 requerido al crear
  descripcion: string;
}

export interface UpdateEventoRequest {
  nombre?: string;
  fecha?: Date;
  horaInicio?: string;
  horaFin?: string;
  capacidad?: number;
  precioEntrada?: number;
  actividadId?: number;  // 🔹 se puede cambiar
  canchaId?: number;
  descripcion?: string;
}

export interface EventoResponse {
  evento: Evento;
  entradas?: Entrada[];
  message: string;
}

export interface EventoListResponse {
  eventos: Evento[];
  total: number;
}
