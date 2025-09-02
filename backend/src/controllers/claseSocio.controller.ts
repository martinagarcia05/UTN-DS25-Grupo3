import { Request, Response, NextFunction } from "express";
import * as claseSocioService from "../services/claseSocio.service";

export async function getAllClasesSocio(req: Request, res: Response, next: NextFunction) {
  try {
    const claseSocios = await claseSocioService.getAllClaseSocio();
    res.json({ claseSocios, total: claseSocios.length });
  } catch (error) {
    next(error);
  }
}

export async function getSociosPorClase(req: Request, res: Response, next: NextFunction) {
  try {
    const claseId = Number(req.params.claseId);
    const claseSocios = await claseSocioService.getSociosPorClase(claseId);
    res.json({ claseSocios });
  } catch (error) {
    next(error);
  }
}


export async function getClaseSocioById(req: Request, res: Response, next: NextFunction) {
  try {
    const claseSocio = await claseSocioService.getClaseSocioById(Number(req.params.id));
    res.json({ claseSocio, message: "ClaseSocio encontrada correctamente" });
  } catch (error) {
    next(error);
  }
}

export async function createClaseSocio(req: Request, res: Response, next: NextFunction) {
  try {
    const claseSocio = await claseSocioService.createClaseSocio(req.body);
    res.status(201).json({ claseSocio, message: "ClaseSocio creada correctamente" });
  } catch (error) {
    next(error);
  }
}

export async function updateClaseSocio(req: Request, res: Response, next: NextFunction) {
  try {
    const claseSocio = await claseSocioService.updateClaseSocio(Number(req.params.id), req.body);
    res.json({ claseSocio, message: "ClaseSocio actualizada correctamente" });
  } catch (error) {
    next(error);
  }
}

export async function deleteClaseSocio(req: Request, res: Response, next: NextFunction) {
  try {
    await claseSocioService.deleteClaseSocio(Number(req.params.id));
    res.json({ message: "ClaseSocio eliminada correctamente" });
  } catch (error) {
    next(error);
  }
}
