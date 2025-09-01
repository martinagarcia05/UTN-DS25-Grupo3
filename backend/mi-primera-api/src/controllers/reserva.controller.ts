import { Request, Response } from "express";
import * as reservaService from "../services/reserva.service";

// READ - obtener turnos disponibles
export function obtenerTurnos(req: Request, res: Response) {
  res.json(reservaService.obtenerTurnos());
}

// CREATE - registrar una reserva
export function registrarReserva(req: Request, res: Response) {
  const nuevaReserva = reservaService.registrarReserva(req.body);
  res.status(201).json(nuevaReserva);
}

// DELETE - cancelar una reserva
export function cancelarReserva(req: Request, res: Response) {
  const { id } = req.params;
  const ok = reservaService.cancelarReserva(id);
  if (ok) {
    res.json({ mensaje: "Reserva cancelada con éxito" });
  } else {
    res.status(404).json({ error: "Reserva no encontrada" });
  }
}
