import { PrismaClient } from "@prisma/client";
import { CrearReservaDTO } from "../types/reserva.types";

const prisma = new PrismaClient();

// Obtener todas las reservas (con cancha y socio)
export async function obtenerReservas() {
  return await prisma.reserva.findMany({
    include: {
      socio: true,
      cancha: true,
    },
  });
}

// Crear una nueva reserva
export async function registrarReserva(data: CrearReservaDTO) {
  // Opcional: validar que el turno no esté ocupado
  const existe = await prisma.reserva.findFirst({
    where: {
      fecha: data.fecha,
      horaInicio: data.horaInicio,
      canchaId: data.canchaId,
    },
  });

  if (existe) {
    throw new Error("Ese turno ya está reservado");
  }

  return await prisma.reserva.create({
    data,
  });
}

// Cancelar una reserva
export async function cancelarReserva(id: number) {
  return await prisma.reserva.delete({
    where: { id },
  });
}


