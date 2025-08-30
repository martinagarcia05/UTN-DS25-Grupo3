import prisma from "../config/prisma";
import { Clase, CreateClaseRequest, UpdateClaseRequest } from "../types/clase";
import { Profesor } from "../types/profesor";
import { Actividad } from "../types/actividad";


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

// Función para mapear Clase
function mapClasePrismaToClase(clase: any): Clase {
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

export async function getClasesByActividad(actividadId: number): Promise<Clase[]> {
  const clases = await prisma.clase.findMany({
    where: { actividadId },
    orderBy: { diaSemana: "asc" },
    include: { profesor: true, actividad: true },
  });

  return clases.map(mapClasePrismaToClase);
}

export async function getClaseById(id: number): Promise<Clase> {
  const clase = await prisma.clase.findUnique({
    where: { id },
    include: { profesor: true, actividad: true },
  });

  if (!clase) throw new Error("Clase no encontrada");
  return mapClasePrismaToClase(clase);
}

export async function createClase(actividadId: number, data: CreateClaseRequest): Promise<Clase> {
  const diasValidos = ["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"];

  if (!diasValidos.includes(data.diaSemana)) {
    throw new Error(`Día inválido: ${data.diaSemana}. Valores permitidos: ${diasValidos.join(", ")}`);
  }

  const clase = await prisma.clase.create({
    data: { 
      ...data, 
      actividadId, 
      activo: data.activo ?? true, 
    },
    include: { profesor: true, actividad: true },
  });

  return mapClasePrismaToClase(clase);
}

export async function updateClase(id: number, data: UpdateClaseRequest): Promise<Clase> {
  const clase = await prisma.clase.update({
    where: { id },
    data,
    include: { profesor: true, actividad: true },
  });
  return mapClasePrismaToClase(clase);
}

export async function deleteClase(id: number): Promise<void> {
  await prisma.clase.delete({ where: { id } });
}
