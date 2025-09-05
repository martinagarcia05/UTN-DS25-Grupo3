// src/services/reserva.service.ts
// Modelo mínimo en memoria para evitar dependencias inexistentes
export interface Reserva {
  id: string;
  cancha: string;
  fecha: string;
  socioId?: string;
}
export const reservas: Reserva[] = [];
// import { reservas, Reserva } from "../models/reserva.model"; //-> RESERVA.MODEL.TS ESTA VACIO
import { CrearReservaDTO } from "../types/reserva.types";
import { randomUUID } from "crypto";

// Obtener turnos disponibles (devuelve todas las reservas)
export function obtenerTurnos(): Reserva[] {
  return reservas;
}

// Crear una nueva reserva
export function registrarReserva(data: CrearReservaDTO): Reserva {
  const nuevaReserva: Reserva = { id: randomUUID(), ...data };
  reservas.push(nuevaReserva);
  return nuevaReserva;
}

// Cancelar una reserva
export function cancelarReserva(id: string): boolean {
  const index = reservas.findIndex((r: Reserva) => r.id === id);
  if (index !== -1) {
    reservas.splice(index, 1);
    return true;
  }
  return false;
}

