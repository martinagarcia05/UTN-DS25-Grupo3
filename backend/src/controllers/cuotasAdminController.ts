import { Request, Response, NextFunction } from 'express';
import * as svc from '../services/cuotasAdminService';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
export async function updateCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const { importe, vencimiento, estado } = req.body as {
      importe?: number;
      vencimiento?: string | Date;
      estado?: "pendiente" | "aprobada" | "rechazada" | "en_revision";
    };

    const cuota = await prisma.cuota.update({
      where: { id },
      data: {
        ...(importe !== undefined ? { importe } : {}),
        ...(vencimiento !== undefined ? { vencimiento: new Date(vencimiento) } : {}),
        ...(estado ? { estado } : {}),
      },
    });

    res.json({ success: true, data: cuota });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/cuotas
 * Lista cuotas con filtros opcionales ?estado= & ?dni=
 */
export async function getAllCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const { estado, dni } = req.query as { estado?: string; dni?: string };

    const where: any = {};
    if (estado) where.estado = estado;
    if (dni) {
      const socio = await prisma.socio.findUnique({ where: { dni: Number(dni) } });
      if (!socio) return res.json({ success: true, data: [] });
      where.socioId = socio.id;
    }

    const cuotas = await prisma.cuota.findMany({
      where,
      orderBy: { vencimiento: "desc" },
      include: {
        socio: { select: { id: true, dni: true, nombre: true, apellido: true } },
      },
    });

    res.json({ success: true, data: cuotas });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/cuotas/dni/:dni
 * Lista TODAS las cuotas de un socio por DNI
 */
export async function getCuotasByDni(req: Request, res: Response, next: NextFunction) {
  try {
    const dni = Number(req.params.dni);
    const socio = await prisma.socio.findUnique({ where: { dni } });
    if (!socio) return res.status(404).json({ success: false, message: "Socio no encontrado" });

    const cuotas = await prisma.cuota.findMany({
      where: { socioId: socio.id },
      orderBy: { vencimiento: "desc" },
    });

    res.json({ success: true, data: { socio: { id: socio.id, dni: socio.dni }, cuotas } });
  } catch (err) {
    next(err);
  }
}

export async function deleteCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await prisma.cuota.delete({ where: { id } });
    res.json({ success: true, message: "Cuota eliminada" });
  } catch (err) {
    next(err);
  }
}