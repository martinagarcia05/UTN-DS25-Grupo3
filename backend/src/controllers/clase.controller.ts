import { Request, Response, NextFunction } from "express";
import * as claseService from "../services/clase.service";
import { CreateClaseRequest, UpdateClaseRequest, ClaseResponse } from "../types/clase";

export async function getClasesByActividad(req: Request<{ actividadId: string }>, res: Response) {
  const clases = await claseService.getClasesByActividad(Number(req.params.actividadId));
  res.json({ clases });
}

export async function getClase(req: Request<{ id: string }>, res: Response<ClaseResponse>, next: NextFunction) {
  try {
    const clase = await claseService.getClaseById(Number(req.params.id));
    res.json({ clase, message: "Clase encontrada" });
  } catch (error) {
    next(error);
  }
}

export async function createClase(req: Request<{ actividadId: string }, ClaseResponse, CreateClaseRequest>, res: Response<ClaseResponse>, next: NextFunction) {
  try {
    const clase = await claseService.createClase(Number(req.params.actividadId), req.body);
    res.status(201).json({ clase, message: "Clase creada correctamente" });
  } catch (error) {
    next(error);
  }
}

export async function updateClase(req: Request<{ id: string }, ClaseResponse, UpdateClaseRequest>, res: Response<ClaseResponse>, next: NextFunction) {
  try {
    const clase = await claseService.updateClase(Number(req.params.id), req.body);
    res.json({ clase, message: "Clase actualizada correctamente" });
  } catch (error) {
    next(error);
  }
}

export async function deleteClase(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  try {
    await claseService.deleteClase(Number(req.params.id));
    res.json({ message: "Clase eliminada correctamente" });
  } catch (error) {
    next(error);
  }
}
