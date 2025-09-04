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
    clase: cs.Clase ? mapClasePrisma(cs.Clase) : undefined, 
    socio: cs.Socio
      ? {
          id: cs.Socio.id,
          nombre: cs.Socio.nombre,
          apellido: cs.Socio.apellido,
          email: cs.Socio.email,
          fechaNacimiento: cs.Socio.fechaNacimiento,
          pais: cs.Socio.pais,
          sexo: cs.Socio.sexo,
          fotoCarnet: cs.Socio.fotoCarnet,
          dni: cs.Socio.dni,
          usuarioId: cs.Socio.usuarioId,
        }
      : undefined,
  };
}

// Obtener todos
export async function getAllClaseSocio(): Promise<ClaseSocio[]> {
  const registros = await prisma.claseSocio.findMany({
    include: {
      Clase: { include: { profesor: true, actividad: true } },
      Socio: true,
    },
  });

  return registros.map(mapClaseSocioPrisma);
}

// Obtener socios por clase
export async function getSociosPorClase(claseId: number): Promise<ClaseSocio[]> {
  const registros = await prisma.claseSocio.findMany({
    where: { claseId },
    include: {
      Socio: true,
      Clase: { include: { profesor: true, actividad: true } },
    },
  });
  return registros.map(mapClaseSocioPrisma);
}

// Obtener por ID
export async function getClaseSocioById(id: number): Promise<ClaseSocio> {
  const registro = await prisma.claseSocio.findUnique({
    where: { id },
    include: {
      Clase: { include: { profesor: true, actividad: true } },
      Socio: true,
    },
  });

  if (!registro) throw new Error("Registro no encontrado");
  return mapClaseSocioPrisma(registro);
}

// Crear
export async function createClaseSocio(data: CreateClaseSocioRequest): Promise<ClaseSocio> {
  const created = await prisma.claseSocio.create({
    data: {
      claseId: data.claseId,
      socioId: data.socioId,
    },
    include: { Clase: true, Socio: true },
  });

  return mapClaseSocioPrisma(created);
}

// Actualizar
export async function updateClaseSocio(id: number, data: UpdateClaseSocioRequest): Promise<ClaseSocio> {
  const updated = await prisma.claseSocio.update({
    where: { id },
    data: {
      ...(data.claseId !== undefined ? { claseId: data.claseId } : {}),
      ...(data.socioId !== undefined ? { socioId: data.socioId } : {}),
    },
    include: { Clase: true, Socio: true },
  });

  return mapClaseSocioPrisma(updated);
}

// Eliminar
export async function deleteClaseSocio(id: number): Promise<void> {
  await prisma.claseSocio.delete({ where: { id } });
}
