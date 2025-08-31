import { Request, Response, NextFunction } from 'express';
import * as svc from '../services/HomeSocioService';

export async function getSocio(req: Request, res: Response) {
  // El parámetro de la URL ahora se trata como ID
  const id = Number(req.params.id); // O req.params.dni, dependiendo de cómo lo hayas nombrado en la ruta

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'El ID proporcionado no es un número válido.' });
  }

  try {
    // Llama a la función correcta que usa la base de datos
    const socio = await svc.getSocioById(id);

    // Si el servicio devuelve null, significa que no lo encontró
    if (!socio) {
      return res.status(404).json({ message: 'Socio no encontrado' });
    }

    // Si lo encuentra, lo devuelve con un código 200 OK
    return res.status(200).json(socio);

  } catch (err: any) {
    console.error('Error en getSocio:', err);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function getEstadoCuota(req: Request, res: Response, next: NextFunction) {
  try { res.json(await svc.getEstadoCuota(parseInt(req.params.id, 10))); }
  catch (err) { next(err); }
}
export async function getAccesos(req: Request, res: Response, next: NextFunction) {
  try { res.json(await svc.getAccesos(parseInt(req.params.id, 10))); }
  catch (err) { next(err); }
}
