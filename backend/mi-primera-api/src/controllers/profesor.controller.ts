import { Request, Response, NextFunction } from "express";
import * as profesorService from "../services/profesor.service";
import { CreateProfesorRequest, UpdateProfesorRequest } from "../types/profesor";

export const getAllProfesores = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profesores = await profesorService.getAllProfesores();
    res.json({ profesores, total: profesores.length });
  } catch (error) {
    next(error);
  }
};

export const getProfesorById = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const profesor = await profesorService.getProfesorById(Number(id));
    res.json({ profesor, message: "Profesor encontrado correctamente" });
  } catch (error) {
    next(error);
  }
};

// Crear profesor
export async function createProfesor(req: Request<{}, {}, CreateProfesorRequest>, res: Response, next: NextFunction) {
  try {
    const data = req.body;
    const profesor = await profesorService.createProfesor(data);
    res.status(201).json({ profesor, message: "Profesor creado correctamente" });
  } catch (error: any) {
    next(error);
  }
}

// Actualizar profesor
export async function updateProfesor(req: Request<{ id: string }, {}, UpdateProfesorRequest>, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const data = req.body;
    const profesor = await profesorService.updateProfesor(Number(id), data);
    res.json({ profesor, message: "Profesor actualizado correctamente" });
  } catch (error: any) {
    next(error);
  }
}

// Eliminar profesor
export async function deleteProfesor(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    await profesorService.deleteProfesor(Number(id));
    res.json({ message: "Profesor eliminado correctamente" });
  } catch (error: any) {
    next(error);
  }
}
