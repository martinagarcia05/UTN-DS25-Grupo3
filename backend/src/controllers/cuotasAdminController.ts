import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";


/**
 * PUT /api/cuotas/:id
 * Actualiza importe / vencimiento / estado de una cuota
//  * Usa updateCuotaSchema (Zod v4) en la route
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
      orderBy: { fecha_vencimiento: "desc" },
      include: {
        Socio: { select: { id: true, dni: true, nombre: true, apellido: true } },
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
    // Desestructuramos los datos de la cuota
    const { socio_id, vencimiento, monto, estado } = req.body;

    // Creamos la cuota
    const cuota = await prisma.cuota.create({
      data: {
        socio_id,                  // ID del socio
        fecha_vencimiento: new Date(vencimiento), // Convertimos a tipo Date
        monto,                  // Importe de la cuota
        estado,                   // Estado de la cuota (pendiente, aprobada, etc.)
      },
    });

    // Devolvemos la cuota creada
    res.status(201).json({ success: true, data: cuota });
  } catch (error) {
    next(error); // Si hay algún error, lo pasamos al manejador de errores
  }
}
