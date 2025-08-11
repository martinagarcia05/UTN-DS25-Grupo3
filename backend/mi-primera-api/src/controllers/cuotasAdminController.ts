import { Request, Response, NextFunction } from 'express';
import * as svc from '../services/cuotasAdminService.ts';

export async function list(req: Request, res: Response, next: NextFunction) {
  try { res.json(await svc.listaCuotas({ estado: req.query.estado as any, nombre: req.query.nombre as string })); }
  catch (e) { next(e); }
}

export async function getDetalle(req: Request, res: Response, next: NextFunction) {
  try { res.json(await svc.getCuotaDetalle(parseInt(req.params.id,10))); }
  catch (e) { next(e); }
}

export async function patchEstado(req: Request, res: Response, next: NextFunction) {
  try {
    // suponiendo que auth pone el usuario en req.user
    const adminName = (req as any).user?.name || 'Admin';
    res.json(await svc.updateEstadoCuota(parseInt(req.params.id,10), req.body, adminName));
  } catch (e) { next(e); }
}
