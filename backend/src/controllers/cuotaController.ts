
import { Request, Response, NextFunction } from 'express';
import * as cuotaService from '../services/cuotaService';
import { GetCuotasSocioResponse, GetCuotasAdministrativoResponse, GetCuotasAdminResponse, EnviarComprobanteResponse, UpdateEstadoCuotaRequest, UpdateEstadoCuotaResponse, GenerarCuotasRequest, GenerarCuotasResponse, } from '../types/cuota';

// SOCIO
export async function getCuotasSocio(
  req: Request,
  res: Response<GetCuotasSocioResponse>,
  next: NextFunction
) {
  try {
    const socioId = (req as any).user.scocioId; // viene del token JWT
    const cuotas = await cuotaService.getCuotasSocio(socioId);
    res.json({ cuotas });
  } catch (error) {
    next(error);
  }
}

export async function enviarComprobante(
  req: Request,
  res: Response<EnviarComprobanteResponse>,
  next: NextFunction
) {
  try {
    const cuotaId = Number(req.params.cuotaId);
    const file = req.file;
    if (!file) return res.status(400).json({ success: false, message: 'No se proporcionó archivo' });

    const response = await cuotaService.enviarComprobante(cuotaId, file);
    res.json(response);
  } catch (error) {
    next(error);
  }
}

// ADMINISTRATIVO
export async function getCuotasAdministrativo(
  req: Request,
  res: Response<GetCuotasAdministrativoResponse>,
  next: NextFunction
) {
  try {
    const filtros = req.query;
    const cuotas = await cuotaService.getCuotasAdministrativo(filtros);
    res.json({ cuotas });
  } catch (error) {
    next(error);
  }
}

export async function updateEstadoCuota(
  req: Request<{ id: string }, {}, UpdateEstadoCuotaRequest>,
  res: Response<UpdateEstadoCuotaResponse>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const adminName = (req as any).user?.nombre || 'Administrador';
    const result = await cuotaService.updateEstadoCuota(id, req.body, adminName);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

// ADMIN
export async function getCuotasAdmin(
  req: Request,
  res: Response<GetCuotasAdminResponse>,
  next: NextFunction
) {
  try {
    const filtros = req.query;
    const cuotas = await cuotaService.getCuotasAdmin(filtros);
    res.json({ cuotas });
  } catch (error) {
    next(error);
  }
}

export async function generarCuotas(
  req: Request<{}, {}, GenerarCuotasRequest>,
  res: Response<GenerarCuotasResponse>,
  next: NextFunction
) {
  try {
    const body = req.body;

    console.log('[Generar cuotas] Datos recibidos:', body);

    const result = await cuotaService.generarCuotas({
      actividadId: body.actividadId ?? undefined, // opcional
      mes: body.mes,
      montoBase: body.montoBase ?? 0,
      preview: !!body.preview, 
    });

    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Error en generarCuotas controller:', error);
    return next(error);
  }
}

export async function deleteCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await cuotaService.deleteCuota(id);
    res.json({ success: true, message: 'Cuota eliminada' });
  } catch (error) {
    next(error);
  }
}

// ADMIN: ejecutar actualización de cuotas vencidas
export async function runVencimiento(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await cuotaService.marcarCuotasVencidas();
    res.json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
}