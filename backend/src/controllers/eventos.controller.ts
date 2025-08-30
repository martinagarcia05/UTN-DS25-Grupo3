import { CreateEventoRequest, UpdateEventoRequest, EventoListResponse, EventoResponse } from "../types/evento";
import { Request, Response, NextFunction } from 'express';
import * as eventoService from '../services/evento.service';
import { FormaDePago} from "../../generated/prisma";

export async function getAllEvento(
  req: Request,
  res: Response<EventoListResponse>,
  next: NextFunction
) {
  try {
    const eventos = await eventoService.getAllEventos(); // devuelve Evento[]
    res.json({
      eventos,
      total: eventos.length
    });
  } catch (error) {
    console.error("Error en getAllEvento:", error);
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
    res.status(201).json(newEvento);
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
  req: Request<{}, {}, { eventoId: number; cantidad: number; socioId?: number; formaDePago: FormaDePago }>,
  res: Response,
  next: NextFunction
) {
  try {
    // Obtenemos los datos del body validados por Zod
    const { eventoId, cantidad, socioId, formaDePago } = req.body;

    // Obtenemos el path del comprobante si se subió archivo
    const comprobanteUrl = req.file?.path;

    // Convertimos a números por si llegaran como strings
    const eventoIdNum = Number(eventoId);
    const cantidadNum = Number(cantidad);
    const socioIdNum = socioId !== undefined ? Number(socioId) : undefined;

    // Llamamos al service
    const venta = await eventoService.registrarVenta(
      eventoIdNum,
      cantidadNum,
      formaDePago,
      socioIdNum,
      comprobanteUrl
    );

    res.status(201).json(venta);
  } catch (error) {
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