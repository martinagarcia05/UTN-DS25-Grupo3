import { Request, Response, NextFunction } from 'express';
import * as svc from '../services/comprobanteAdminService';

export async function getDetalle(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    const data = await svc.getCuotaDetalle(id);
    res.json(data);
  } catch (e) { next(e); }
}

export async function patchEstado(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    const adminName = (req as any).user?.name || 'Admin';
    const data = await svc.updateEstadoCuota(id, req.body, adminName);
    res.json(data);
  } catch (e) { next(e); }
}
