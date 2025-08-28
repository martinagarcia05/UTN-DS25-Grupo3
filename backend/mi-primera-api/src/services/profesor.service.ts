<<<<<<< HEAD
import prisma from "../config/prisma";
import { CreateProfesorRequest, UpdateProfesorRequest } from "../types/profesor";

// Listar todos los profesores
export async function getAllProfesores() {
  return prisma.profesor.findMany();
}

// Obtener profesor por ID
export async function getProfesorById(id: number) {
  return prisma.profesor.findUnique({ where: { id } });
}

// Crear profesor
export async function createProfesor(data: CreateProfesorRequest) {
  return prisma.profesor.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      activo: data.activo ?? true, // default true
    },
  });
}

// Actualizar profesor
export async function updateProfesor(id: number, data: UpdateProfesorRequest) {
  return prisma.profesor.update({
    where: { id },
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      activo: data.activo ?? true,
    },
  });
}

// Eliminar profesor
export async function deleteProfesor(id: number) {
  return prisma.profesor.delete({ where: { id } });
=======
import { Profesor } from "../types/profesor";
import prisma from "../config/prisma";

export async function getAllProfesores(): Promise<Profesor[]> {
  const profesores = await prisma.profesor.findMany({
    include: { clases: true },
    orderBy: { createdAt: "asc" },
  });

  return profesores;
}

export async function getProfesorById(id: number): Promise<Profesor> {
  const profesor = await prisma.profesor.findUnique({
    where: { id },
    include: { clases: true },
  });

  if (!profesor) throw new Error("Profesor no encontrado");
  return profesor;
}

export async function createProfesor(data: Omit<Profesor, "id" | "createdAt">): Promise<Profesor> {
  const created = await prisma.profesor.create({ data, include: { clases: true } });
  return created;
}

export async function updateProfesor(id: number, data: Partial<Omit<Profesor, "id" | "createdAt">>): Promise<Profesor> {
  const updated = await prisma.profesor.update({ where: { id }, data, include: { clases: true } });
  return updated;
}

export async function deleteProfesor(id: number): Promise<void> {
  await prisma.profesor.delete({ where: { id } });
>>>>>>> LuliDevelop
}
