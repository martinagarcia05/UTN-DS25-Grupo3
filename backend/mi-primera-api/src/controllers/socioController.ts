import { Request, Response } from "express";
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

export async function updateSocioByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  if (Number.isNaN(dni)) return res.status(400).json({ success: false, message: 'DNI inválido' });

  const datos = req.body as ActualizarSocioRequest;
  try {
    const socioActualizado = await socioService.updateSocioByDni(dni, datos);
    return res.json({ success: true, socio: socioActualizado });
  } catch (err: any) {
    console.error(err);
    const status = err.statusCode || (err.code === 'P2025' ? 404 : 500);
    return res.status(status).json({
      success: false,
      message: err.message || 'Error al actualizar',
      error: status === 500 ? 'Internal server error' : err.name,
      timestamp: new Date().toISOString()
    });
  }
}

export async function getSocioById(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ success: false, message: 'ID inválido' });
  }

  try {
    const socio = await socioService.getSocioById(id);
    if (!socio) {
      return res.status(404).json({ message: 'Socio no encontrado' });
    }
    return res.json({ success: true, socio });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }

