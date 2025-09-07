import { Request, Response, NextFunction } from 'express';
import * as svc from '../services/cuotasAdminService';

export async function list(req: Request, res: Response, next: NextFunction) {
  try { res.json(await svc.listCuotasAdmin()); }
  catch (e) { next(e); }
}

export async function getDetalle(req: Request, res: Response, next: NextFunction) {
  try { res.json(await svc.getDetalle(parseInt(req.params.id,10))); }
  catch (e) { next(e); }
}

export async function patchEstado(req: Request, res: Response, next: NextFunction) {
  try {
    // suponiendo que auth pone el usuario en req.user
    const adminName = (req as any).user?.name || 'Admin';
    res.json(await svc.setEstadoCuota(parseInt(req.params.id,10), req.body, adminName));
  } catch (e) { next(e); }
}

export async function generarCuotas(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await svc.generarCuotas(req.body));
  } catch (e) {
    next(e);
  }
}