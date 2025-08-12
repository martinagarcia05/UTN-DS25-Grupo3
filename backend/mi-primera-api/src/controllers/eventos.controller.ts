import { CreateEventoRequest, UpdateEventoRequest, EventoListResponse, EventoResponse } from "../types/evento";
import { Request, Response, NextFunction} from 'express';
import * as eventoService from '../services/evento.service';
import { Comprador } from "../types/evento";
import { UpdateEntradaRequest } from '../types/entradas';


export async function getAllEvento(req: Request, res: Response<EventoListResponse>, next: NextFunction) {
  try {
    const eventos = await eventoService.getAllEvento();
    res.json({
      eventos,
      total: eventos.length
    });
  } catch (error) {
    console.error('Error en getAllEvento:', error);
    next(error);
  }
}


export async function getEventoById(req: Request, res: Response<EventoResponse>, next: NextFunction) {
  try{
    const { id } = req.params;
    if (!id) {
      const error = new Error("ID parameter is missing");
      (error as any).statusCode = 400;
      throw error;
    }
    const evento = await eventoService.getEventoById (parseInt(id));
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
    const id = parseInt(req.params.id, 10); // Convertir a número explícitamente
    const updateData = req.body;

    const updatedEvento = await eventoService.updateEvento(id, updateData);

    res.status(200).json({
      evento: updatedEvento,
      message: 'Evento updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

export async function registrarVenta(
  req: Request<{ id: string }, EventoResponse, { cantidad: number; comprador: Comprador }>,
  res: Response<EventoResponse>,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.error('El ID no es un número válido:', req.params.id);
      return res.status(400).json({ message: 'ID inválido' });
    }
    const { cantidad, comprador } = req.body;

    const venta = await eventoService.registrarVenta(id, cantidad, comprador);

    console.log('Venta registrada en service:', venta);

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
    const { id } = req.params;
    if (!id) {
      const error = new Error("ID parameter is missing");
      (error as any).statusCode = 400;
      throw error;
    }
    await eventoService.deleteEvento(parseInt(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}