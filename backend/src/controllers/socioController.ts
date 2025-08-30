import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";
import * as socioService from '../services/socioService';

export async function getSocioByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  console.log("Buscando socio con DNI:", dni);  // <- acá

  if (isNaN(dni)) return res.status(400).json({ error: 'DNI inválido' });

  try {
    const socio = await socioService.getSocioByDni(dni);
    if (!socio) return res.status(404).json({ error: 'Socio no encontrado' });
    res.json(socio); // devuelve { id: 1 } si existe
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar socio' });
  }
}

export async function getAllSocios(req: Request, res: Response, next: NextFunction) {
  try {
    const socios = await prisma.socio.findMany();
    res.json({ socios });
  } catch (error) {
    next(error);
  }
}


