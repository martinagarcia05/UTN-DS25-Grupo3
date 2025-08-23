import { CreateEventoRequest, UpdateEventoRequest, EventoListResponse, EventoResponse } from "../types/evento";
import { Socio } from "../types/Socio";
import { Request, Response, NextFunction } from 'express';
import * as eventoService from '../services/evento.service';


export async function getAllEvento(req: Request, res: Response<EventoListResponse>, next: NextFunction) {
  try {
    const eventos = await eventoService.getAllEventos();
    res.json({
      eventos,
      total: eventos.length
    });
  } catch (error) {
    console.error('Error en getAllEvento:', error);
    next(error);
  }
}


export async function getEventoById(req: Request, res: Response<any>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const evento = await eventoService.getEventoById(id);
    res.json({
      evento,
      message: "Evento retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
}


export async function createEvento(
  req: Request<{}, EventoResponse, CreateEventoRequest>,
  res: Response<EventoResponse>,
  next: NextFunction
) {
  try {
    const newEvento = await eventoService.createEvento(req.body);
    res.status(201).json({
      evento: newEvento,
      message: 'Evento created successfully'
    });
  } catch (error) {
    next(error);
  }
}


export async function updateEvento(
  req: Request<{ id: string }, {}, UpdateEventoRequest>,
  res: Response,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const updatedEvento = await eventoService.updateEvento(id, req.body);
    res.status(200).json({
      evento: updatedEvento,
      message: 'Evento updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function registrarVenta(
  req: Request<{ id: string }, EventoResponse, { cantidad: number; socio: Socio }>,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const { cantidad, socio } = req.body;
    const venta = await eventoService.registrarVenta(id, cantidad, socio.id);

    res.json({
      evento: venta,
      message: 'Venta registrada exitosamente'
    });
  } catch (error) {
    console.error('Error en registrarVenta:', error);
    next(error);
  }
}

export async function deleteEvento(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await eventoService.deleteEvento(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
