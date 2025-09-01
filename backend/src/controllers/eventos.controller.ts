import { CreateEventoRequest, UpdateEventoRequest, EventoListResponse, EventoResponse } from "../types/evento";
<<<<<<< HEAD
import { Socio } from "../types/Socio";
import { Request, Response, NextFunction } from 'express';
import * as eventoService from '../services/evento.service';


export async function getAllEvento(req: Request, res: Response<EventoListResponse>, next: NextFunction) {
  try {
    const eventos = await eventoService.getAllEventos();
=======
import { Request, Response, NextFunction } from 'express';
import * as eventoService from '../services/evento.service';
import { FormaDePago} from "../generated/prisma";

export async function getAllEvento(
  req: Request,
  res: Response<EventoListResponse>,
  next: NextFunction
) {
  try {
    const eventos = await eventoService.getAllEventos(); // devuelve Evento[]
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    res.json({
      eventos,
      total: eventos.length
    });
  } catch (error) {
<<<<<<< HEAD
    console.error('Error en getAllEvento:', error);
=======
    console.error("Error en getAllEvento:", error);
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    next(error);
  }
}

<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
export async function getEventoById(req: Request, res: Response<any>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    const evento = await eventoService.getEventoById(id);
    res.json({
      evento,
      message: "Evento retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
}

<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
export async function createEvento(
  req: Request<{}, EventoResponse, CreateEventoRequest>,
  res: Response<EventoResponse>,
  next: NextFunction
) {
  try {
    const newEvento = await eventoService.createEvento(req.body);
<<<<<<< HEAD
    res.status(201).json({
      evento: newEvento,
      message: 'Evento created successfully'
    });
=======
    res.status(201).json(newEvento);
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
  } catch (error) {
    next(error);
  }
}

<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
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
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    const updatedEvento = await eventoService.updateEvento(id, req.body);
    res.status(200).json({
      evento: updatedEvento,
      message: 'Evento updated successfully'
    });
  } catch (error) {
    next(error);
  }
}

<<<<<<< HEAD
export async function registrarVenta(
  req: Request<{ id: string }, EventoResponse, { cantidad: number; socioId: number }>,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ message: 'ID inválido' });

    const { cantidad, socioId } = req.body;
    if (!cantidad || !socioId){
      return res.status(400).json({ message: 'Cantidad y socioId son requeridos' });
    }

    const venta = await eventoService.registrarVenta(id, cantidad, socioId);

    res.json({
      evento: venta,
      message: 'Venta registrada exitosamente'
    });
  } catch (error) {
    console.error('Error en registrarVenta:', error);
=======

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
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    next(error);
  }
}


<<<<<<< HEAD
=======

>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
export async function deleteEvento(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    await eventoService.deleteEvento(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
