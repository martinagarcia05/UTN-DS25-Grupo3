import { PrismaClient, estado_cuota, $Enums } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import {
  CuotaSocioDTO,
  CuotaAdministrativoDTO,
  CuotaAdminDTO,
  GetCuotasAdministrativoQuery,
  EnviarComprobanteResponse,
  GenerarCuotasRequest,
  GenerarCuotasResponse,
  UpdateEstadoCuotaRequest,
  UpdateEstadoCuotaResponse,
  PreviewItem,
  DetalleCuota
} from '../types/cuota';

const prisma = new PrismaClient();

export const toDDMMYYYY = (d: Date) =>
  `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

// ------------------------------------------------------------------
// 🧮 Función auxiliar: determinar estado según vencimiento
// ------------------------------------------------------------------
function determinarEstadoCuota(vencimiento: Date): $Enums.estado_cuota {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return vencimiento >= hoy ? estado_cuota.PENDIENTE : estado_cuota.VENCIDA;
}

// SOCIO
export async function getCuotasSocio(socioId: number): Promise<CuotaSocioDTO[]> {
  const cuotas = await prisma.cuota.findMany({
    where: { socio_id: socioId },
    include: {
      comprobantes: { where: { activo: true }, select: { url: true, subido_en: true } },
    },
    orderBy: { created_at: 'desc' },
  });

  return cuotas.map((c) => ({
    id: c.id,
    mes: c.mes!,
    monto: Number(c.monto),
    estado: c.estado,
    comprobanteUrl: c.comprobantes?.[0]?.url,
    fechaCarga: c.comprobantes?.[0]?.subido_en
      ? toDDMMYYYY(c.comprobantes[0].subido_en)
      : undefined,
    message: !c.comprobantes?.length ? 'Comprobante no cargado' : undefined,
  }));
}

// Subida de comprobante (SOCIO)
export async function enviarComprobante(
  cuotaId: number,
  file: Express.Multer.File
): Promise<EnviarComprobanteResponse> {
  const cuota = await prisma.cuota.findUnique({ where: { id: cuotaId } });
  if (!cuota) throw new Error('Cuota no encontrada');

  // Validar formato y tamaño
  if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/i))
    throw new Error('Formato inválido (solo JPG, PNG o PDF)');
  if (file.size > 5 * 1024 * 1024)
    throw new Error('Archivo demasiado grande (máx 5MB)');

  // Guardar en carpeta uploads/
  const uploadDir = path.join(__dirname, '../../uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
  const filePath = path.join(uploadDir, file.originalname);
  fs.writeFileSync(filePath, file.buffer);

  // Crear o actualizar comprobante activo
  await prisma.comprobante.upsert({
    where: { cuotaId_activo: { cuotaId, activo: true } },
    update: { url: `/uploads/${file.originalname}`, activo: true },
    create: { cuotaId, url: `/uploads/${file.originalname}`, activo: true },
  });

  // Marcar la cuota en revisión
  await prisma.cuota.update({
    where: { id: cuotaId },
    data: { estado: estado_cuota.EN_REVISION },
  });

  return { success: true, message: 'Comprobante enviado correctamente' };
}

//  ADMINISTRATIVO
export async function getCuotasAdministrativo(
  filtros: GetCuotasAdministrativoQuery
): Promise<CuotaAdministrativoDTO[]> {
  const where: any = {};
  if (filtros.estado && filtros.estado !== 'Todas') where.estado = filtros.estado;
  if (filtros.nombre) {
    where.Socio = {
      OR: [
        { nombre: { contains: filtros.nombre, mode: 'insensitive' } },
        { apellido: { contains: filtros.nombre, mode: 'insensitive' } },
      ],
    };
  }

  const cuotas = await prisma.cuota.findMany({
    where,
    include: {
      Socio: { select: { nombre: true, apellido: true } },
      comprobantes: { where: { activo: true }, select: { url: true, subido_en: true } },
    },
    orderBy: { created_at: 'desc' },
  });

  return cuotas.map((c) => ({
    id: c.id,
    socioNombre: `${c.Socio.nombre} ${c.Socio.apellido}`,
    mes: c.mes!,
    monto: Number(c.monto),
    estado: c.estado,
    comprobanteUrl: c.comprobantes?.[0]?.url,
    fechaCarga: c.comprobantes?.[0]?.subido_en
      ? toDDMMYYYY(c.comprobantes[0].subido_en)
      : undefined,
  }));
}

// Cambiar estado de cuota (ADMINISTRATIVO)
export async function updateEstadoCuota(
  id: number,
  body: UpdateEstadoCuotaRequest,
  adminName: string
): Promise<UpdateEstadoCuotaResponse> {
  const cuota = await prisma.cuota.findUnique({ where: { id } });
  if (!cuota) throw new Error('Cuota no encontrada');

  const nuevoEstado =
    body.estado === 'Aprobada'
      ? estado_cuota.PAGADA
      : estado_cuota.EN_REVISION;

  const yaEstaba = cuota.estado === nuevoEstado;

  await prisma.cuota.update({
    where: { id },
    data: { estado: nuevoEstado },
  });

  return {
    id: cuota.id,
    estado: body.estado,
    fechaCambio: toDDMMYYYY(new Date()),
    cambiadoPor: adminName,
    ...(yaEstaba ? { message: 'El estado ya estaba asignado' } : {}),
  };
}

// ADMIN
export async function getCuotasAdmin(
  filtros?: { estado?: string; nombre?: string }
): Promise<CuotaAdminDTO[]> {
  const where: any = {};

  if (filtros?.estado && filtros.estado !== 'Todas')
    where.estado = filtros.estado;
  if (filtros?.nombre) {
    where.Socio = {
      OR: [
        { nombre: { contains: filtros.nombre, mode: 'insensitive' } },
        { apellido: { contains: filtros.nombre, mode: 'insensitive' } },
      ],
    };
  }

  const cuotas = await prisma.cuota.findMany({
    where,
    include: {
      Socio: { select: { id: true, nombre: true, apellido: true } },
      comprobantes: { where: { activo: true }, select: { url: true, subido_en: true } },
    },
    orderBy: { created_at: 'desc' },
  });

  return cuotas.map((c) => ({
    id: c.id,
    socioId: c.Socio.id,
    socioNombre: `${c.Socio.nombre} ${c.Socio.apellido}`,
    mes: c.mes!,
    monto: Number(c.monto),
    estado: c.estado,
    comprobanteUrl: c.comprobantes?.[0]?.url,
    fechaCarga: c.comprobantes?.[0]?.subido_en
      ? `${c.comprobantes[0].subido_en.getDate().toString().padStart(2, '0')}/${
          (c.comprobantes[0].subido_en.getMonth() + 1).toString().padStart(2, '0')
        }/${c.comprobantes[0].subido_en.getFullYear()}`
      : undefined,
    creadoEn: `${c.created_at.getDate().toString().padStart(2, '0')}/${
      (c.created_at.getMonth() + 1).toString().padStart(2, '0')
    }/${c.created_at.getFullYear()}`,
  }));
}


// Generar cuotas (ADMIN)
export async function generarCuotas(
  data: GenerarCuotasRequest
): Promise<GenerarCuotasResponse> {
  const { actividadId, mes, montoBase, preview } = data;

  // 🔹 Traer socios activos
  const socios = await prisma.socio.findMany({
    where: { estado: 'ACTIVO' },
  });

  let created = 0;
  let updated = 0;
  let skips = 0;
  const previewItems: PreviewItem[] = [];

  // 🔹 Procesar cada socio
  for (const socio of socios) {
    // 1️⃣ Buscar sus actividades (todas o filtradas)
    const actividadesSocio = await prisma.actividadSocio.findMany({
      where: {
        socioId: socio.id,
        ...(actividadId ? { actividadId } : {}),
      },
      include: {
        actividad: {
          select: { id: true, nombre: true, monto: true, activo: true },
        },
      },
    });

    if (!actividadesSocio.length) {
      skips++;
      continue;
    }

    // 2️⃣ Calcular total y armar detalle
    const detalle: DetalleCuota[] = [];

    if (montoBase > 0) {
      detalle.push({ tipo: 'base' as const, monto: montoBase });
    }

    for (const a of actividadesSocio) {
      detalle.push({
        tipo: 'actividad' as const,
        id: a.actividad.id,
        nombre: a.actividad.nombre,
        monto: Number(a.actividad.monto),
      });
    }

    const total = detalle.reduce((acc, d) => acc + d.monto, 0);

    // 3️⃣ Si es solo previsualización → no toca BD
    if (preview) {
      previewItems.push({ socioId: socio.id, total, detalle });
      continue;
    }

    // 4️⃣ Ver si ya existe una cuota para ese mes
    const existente = await prisma.cuota.findFirst({
      where: { socio_id: socio.id, mes },
      include: { cuotaXactividad: true },
    });

    if (!existente) {
      // 5️⃣ Crear nueva cuota con detalle
      await prisma.cuota.create({
        data: {
          socio_id: socio.id,
          mes,
          monto: total,
          metodo_pago: $Enums.FormaDePago.EFECTIVO,
          estado: $Enums.estado_cuota.PENDIENTE,
          cuotaXactividad: {
            create: detalle
              .filter((d) => d.tipo === 'actividad')
              .map((d) => ({
                actividadId: d.id!,
                monto: d.monto,
              })),
          },
        },
      });
      created++;
    } else {
      // 6️⃣ Actualizar cuota existente
      await prisma.cuota.update({
        where: { id: existente.id },
        data: {
          monto: total,
          cuotaXactividad: {
            deleteMany: {}, // limpiar previas
            create: detalle
              .filter((d) => d.tipo === 'actividad')
              .map((d) => ({
                actividadId: d.id!,
                monto: d.monto,
              })),
          },
        },
      });
      updated++;
    }
  }

  // 7️⃣ Devolver resultado
  return {
    processedSocios: socios.length,
    created,
    updated,
    skips,
    ...(preview ? { previewItems } : {}),
  };
}

// Eliminar cuota
export async function deleteCuota(id: number) {
  await prisma.cuota.delete({ where: { id } });
}
