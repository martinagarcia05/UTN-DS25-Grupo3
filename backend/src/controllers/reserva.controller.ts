import { Request, Response } from "express";
import * as reservaService from "../services/reserva.service";

// GET - obtener reservas
export async function obtenerReservas(req: Request, res: Response) {
  try {
    const reservas = await reservaService.obtenerReservas();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reservas" });
  }
}

// POST - registrar reserva
export async function registrarReserva(req: Request, res: Response) {
  try {
    const nuevaReserva = await reservaService.registrarReserva(req.body);
    res.status(201).json(nuevaReserva);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE - cancelar reserva
export async function cancelarReserva(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const reserva = await reservaService.cancelarReserva(Number(id));
    res.json({ mensaje: "Reserva cancelada", reserva });
  } catch (error) {
    res.status(404).json({ error: "Reserva no encontrada" });
  }
}
