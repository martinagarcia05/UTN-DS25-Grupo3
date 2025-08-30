import prisma from "../config/prisma";
import { ClaseSocio } from "../types/claseSocio";
import { Clase } from "../types/clase";
import { Profesor } from "../types/profesor";
import { Actividad } from "../types/actividad";
import { CreateClaseSocioRequest, UpdateClaseSocioRequest } from "../types/claseSocio";

// Función para mapear profesor de Prisma a nuestro tipo
function mapProfesorPrisma(profesor: any): Profesor {
  return {
    id: profesor.id,
    nombre: profesor.nombre,
    apellido: profesor.apellido,
    email: profesor.email,
    activo: profesor.activo,
    createdAt: profesor.createdAt,
  };
}

// Función para mapear actividad de Prisma a nuestro tipo
function mapActividadPrisma(actividad: any): Actividad {
  return {
    id: actividad.id,
    nombre: actividad.nombre,
    monto: actividad.monto,
    activo: actividad.activo,
    createdAt: actividad.createdAt,
  };
}

// Función para mapear clase de Prisma a nuestro tipo
function mapClasePrisma(clase: any): Clase {
  return {
    id: clase.id,
    diaSemana: clase.diaSemana,
    horaInicio: clase.horaInicio,
    horaFin: clase.horaFin,
    activo: clase.activo,
    actividadId: clase.actividadId,
    profesorId: clase.profesorId ?? undefined,
    createdAt: clase.createdAt,
    profesor: clase.profesor ? mapProfesorPrisma(clase.profesor) : undefined,
    actividad: clase.actividad ? mapActividadPrisma(clase.actividad) : undefined,
  };
}

// Función para mapear ClaseSocio
function mapClaseSocioPrisma(cs: any): ClaseSocio {
  return {
    id: cs.id,
    claseId: cs.claseId,
    socioId: cs.socioId,
    clase: cs.clase ? mapClasePrisma(cs.clase) : undefined,
    socio: cs.socio ? {
      id: cs.socio.id,
      nombre: cs.socio.nombre,
      apellido: cs.socio.apellido,
      email: cs.socio.email,
      fechaNacimiento: cs.socio.fechaNacimiento,
      pais: cs.socio.pais,
      sexo: cs.socio.sexo,
      fotoCarnet: cs.socio.fotoCarnet,
      dni: cs.socio.dni,
      usuarioId: cs.socio.usuarioId,
    } : undefined,
  };
}

export async function getAllClaseSocio(): Promise<ClaseSocio[]> {
  const registros = await prisma.claseSocio.findMany({
    include: {
      clase: { include: { profesor: true, actividad: true } },
      socio: true,
    },
  });

  return registros.map(mapClaseSocioPrisma);
}

export async function getClaseSocioById(id: number): Promise<ClaseSocio> {
  const registro = await prisma.claseSocio.findUnique({
    where: { id },
    include: {
      clase: { include: { profesor: true, actividad: true } },
      socio: true,
    },
  });

  if (!registro) throw new Error("Registro no encontrado");
  return mapClaseSocioPrisma(registro);
}

export async function createClaseSocio(data: CreateClaseSocioRequest): Promise<ClaseSocio> {
  const created = await prisma.claseSocio.create({
    data: {
      claseId: data.claseId,
      socioId: data.socioId,
    },
    include: { clase: true, socio: true }, // esto solo es para devolver la relación completa
  });

  return {
    ...created,
    clase: created.clase ? { ...created.clase, profesorId: created.clase.profesorId ?? undefined } : undefined,
    socio: created.socio ?? undefined,
  };
}


export async function updateClaseSocio(id: number, data: UpdateClaseSocioRequest): Promise<ClaseSocio> {
  const updated = await prisma.claseSocio.update({
    where: { id },
    data: {
      ...(data.claseId !== undefined ? { claseId: data.claseId } : {}),
      ...(data.socioId !== undefined ? { socioId: data.socioId } : {}),
    },
    include: { clase: true, socio: true },
  });

  return {
    ...updated,
    clase: updated.clase ? { ...updated.clase, profesorId: updated.clase.profesorId ?? undefined } : undefined,
    socio: updated.socio ?? undefined,
  };
}

export async function deleteClaseSocio(id: number): Promise<void> {
  await prisma.claseSocio.delete({ where: { id } });
}
