import { Request, Response, NextFunction } from 'express';
import { getCuotas as getCuotasService, enviarComprobante as enviarComprobanteService } from '../services/cuotaService';
import { GetCuotasResponse, EnviarComprobanteResponse } from '../types/cuota';


interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

export async function getCuotas(req: Request, res: Response<GetCuotasResponse>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const cuotas = await getCuotasService(id, req.query);
    res.json(cuotas);
  } catch (error) {
    next(error);
  }
}

export async function enviarComprobante(req: RequestWithFile, res: Response<EnviarComprobanteResponse>, next: NextFunction) {
  try {
    const cuotaId = parseInt(req.params.cuotaId);
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No se proporcionó archivo' });
    }
    const response = await enviarComprobanteService(cuotaId, { comprobante: req.file! });
    res.json(response);
  } catch (error) {
    next(error);
  }
}