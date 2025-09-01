import { Request, Response, NextFunction } from "express";
import * as actividadService from "../services/actividad.service";
import { CreateActividadRequest, UpdateActividadRequest, ActividadResponse } from "../types/actividad";
import prisma from "../config/prisma";
import { Actividad } from "../types/actividad";

export async function getAllActividades(req: Request, res: Response, next: NextFunction) {
  try {
    const actividades = await actividadService.getAllActividades();
    res.json({ actividades, total: actividades.length });
  } catch (error: any) {
    next(error);
  }
}

export async function getActividadById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const actividad = await actividadService.getActividadById(Number(id));
    res.json({
      actividad,
      message: "Actividad retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
}


export async function createActividad(data: CreateActividadRequest): Promise<Actividad> {
  const created = await prisma.actividad.create({
    data: {
      nombre: data.nombre,
      monto: data.monto,
      activo: data.activo ?? true
    }
  });
  return created;
}

export async function updateActividad(
  req: Request<{ id: string }, ActividadResponse, UpdateActividadRequest>,
  res: Response<ActividadResponse>,
  next: NextFunction
) {
  try {
    const actividad = await actividadService.updateActividad(Number(req.params.id), req.body);
    res.json({ actividad, message: "Actividad actualizada correctamente" });
  } catch (error) {
    next(error);
  }
}



export async function deleteActividad(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await actividadService.deleteActividad(Number(id));
    res.json({ message: "Actividad deleted successfully" });
  } catch (error) {
    next(error);
  }
}
