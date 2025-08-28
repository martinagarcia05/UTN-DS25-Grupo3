
// import prisma from "../config/prisma";
// import { CreateProfesorRequest, UpdateProfesorRequest } from "../types/profesor";

// // Listar todos los profesores
// export async function getAllProfesores() {
//   return prisma.profesor.findMany();
// }

// // Obtener profesor por ID
// export async function getProfesorById(id: number) {
//   return prisma.profesor.findUnique({ where: { id } });
// }

// // Crear profesor
// export async function createProfesor(data: CreateProfesorRequest) {
//   return prisma.profesor.create({
//     data: {
//       nombre: data.nombre,
//       apellido: data.apellido,
//       email: data.email,
//       activo: data.activo ?? true, // default true
//     },
//   });
// }

// // Actualizar profesor
// export async function updateProfesor(id: number, data: UpdateProfesorRequest) {
//   return prisma.profesor.update({
//     where: { id },
//     data: {
//       nombre: data.nombre,
//       apellido: data.apellido,
//       email: data.email,
//       activo: data.activo ?? true,
//     },
//   });
// }

// // Eliminar profesor
// export async function deleteProfesor(id: number) {
//   return prisma.profesor.delete({ where: { id } });
// }