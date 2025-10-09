import { Request, Response, NextFunction } from 'express';
import { getCuotas as getCuotasService, enviarComprobante as enviarComprobanteService } from '../services/cuotaService';
import { GetCuotasResponse, EnviarComprobanteResponse } from '../types/cuota';
import prisma from '../config/prisma';

/**
 * PUT /api/cuotas/:id
 * Actualiza importe / vencimiento / estado de una cuota
 */
export async function updateCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const { importe, vencimiento, estado } = req.body as {
      importe?: number;
      vencimiento?: string | Date;
      estado?: 'PAGADA' | 'VENCIDA' | 'EN_REVISION' | 'PENDIENTE' | 'RECHAZADA';
    };

    const cuota = await prisma.cuota.update({
      where: { id },
      data: {
        ...(importe !== undefined ? { monto: importe } : {}),
        ...(vencimiento !== undefined ? { fecha_vencimiento: new Date(vencimiento) } : {}),
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
      orderBy: { fecha_vencimiento: "desc" },
      include: {
        Socio: { select: { id: true, dni: true, nombre: true, apellido: true } },
      },
    });

    // Convertimos fecha_vencimiento a string si es necesario
    const cuotasConFecha = cuotas.map(cuota => ({
      ...cuota,
      fecha_vencimiento: cuota.fecha_vencimiento.toISOString()  // Si es tipo Date, lo convertimos a string
    }));

    res.json({ success: true, data: cuotasConFecha });
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
      where: { socio_id: socio.id },
      orderBy: { fecha_vencimiento: "desc" },
    });

    res.json({ success: true, data: { socio: { id: socio.id, dni: socio.dni }, cuotas } });
  } catch (err) {
    next(err);
  }
}

/**
 * DELETE /api/cuotas/:id
 * Elimina una cuota por id
 */
export async function deleteCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await prisma.cuota.delete({ where: { id } });
    res.json({ success: true, message: "Cuota eliminada" });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/cuotas
 * Crea una nueva cuota para un socio (ADMIN)
 */
export async function generarCuota(req: Request, res: Response, next: NextFunction) {
  try {
    const { socio_id, vencimiento, monto, estado } = req.body;

    const cuota = await prisma.cuota.create({
      data: {
        socio_id,
        fecha_vencimiento: new Date(vencimiento),  // Aseguramos que vencimiento sea de tipo Date
        monto,
        estado,
      },
    });

    res.status(201).json({ success: true, data: cuota });
  } catch (error) {
    next(error);
  }
}

// Controladores de Socio (Rutas de Cuotas Socio)

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

export async function getCuotas(req: Request, res: Response<GetCuotasResponse>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const cuotas = await getCuotasService(id, req.query);  // Llamamos al servicio para obtener las cuotas
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
    const response = await enviarComprobanteService(cuotaId, { comprobante: req.file! });  // Llamamos al servicio para enviar el comprobante
    res.json(response);
  } catch (error) {
    next(error);
  }
}
