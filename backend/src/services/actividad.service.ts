import prisma from "../config/prisma";
import { Actividad, CreateActividadRequest, UpdateActividadRequest } from "../types/actividad";
import { Clase } from "../types/clase";

// Mapeo de Prisma a tipo Clase
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
    profesor: clase.profesor
      ? {
          id: clase.profesor.id,
          nombre: clase.profesor.nombre,
          apellido: clase.profesor.apellido,
          email: clase.profesor.email,
          activo: clase.profesor.activo,
          createdAt: clase.profesor.createdAt,
        }
      : undefined,
  };
}

// Mapeo de Prisma a tipo Actividad
function mapActividadPrismaToActividad(actividad: any): Actividad {
  return {
    id: actividad.id,
    nombre: actividad.nombre,
    monto: actividad.monto,
    activo: actividad.activo,
    createdAt: actividad.createdAt,
    clases: actividad.clases?.map(mapClasePrismaToClase) ?? [],
  };
}

// Obtener todas las actividades
export async function getAllActividades(): Promise<Actividad[]> {
  const actividades = await prisma.actividad.findMany({
    orderBy: { createdAt: "desc" },
    include: { clases: { include: { profesor: true } } },
  });
  return actividades.map(mapActividadPrismaToActividad);
}

// Obtener actividad por ID
export async function getActividadById(id: number): Promise<Actividad> {
  const actividad = await prisma.actividad.findUnique({
    where: { id },
    include: { clases: { include: { profesor: true } } },
  });
  if (!actividad) throw new Error("Actividad no encontrada");
  return mapActividadPrismaToActividad(actividad);
}

// Crear actividad
export async function createActividad(data: CreateActividadRequest): Promise<Actividad> {
  const actividad = await prisma.actividad.create({ data });
  return mapActividadPrismaToActividad({ ...actividad, clases: [] });
}

// Actualizar actividad
export async function updateActividad(id: number, data: UpdateActividadRequest): Promise<Actividad> {
  const actividad = await prisma.actividad.update({
    where: { id },
    data,
    include: { clases: { include: { profesor: true } } },
  });
  return mapActividadPrismaToActividad(actividad);
}

// Eliminar actividad
export async function deleteActividad(id: number): Promise<void> {
  try {
    //  1. Buscar todas las canchas de la actividad
    const canchas = await prisma.cancha.findMany({
      where: { actividadId: id },
      include: { eventos: true },
    });

    for (const cancha of canchas) {
      // 2. Por cada evento de cada cancha, eliminar sus entradas
      for (const evento of cancha.eventos) {
        await prisma.entrada.deleteMany({
          where: { eventoId: evento.id },
        });
      }

      //  3. Eliminar los eventos de la cancha
      await prisma.evento.deleteMany({
        where: { canchaId: cancha.id },
      });
    }

    //  4. Eliminar las canchas asociadas
    await prisma.cancha.deleteMany({
      where: { actividadId: id },
    });

    // 5. Eliminar asociaciones (actividadSocio y cuotaXactividad)
    await prisma.actividadSocio.deleteMany({
      where: { actividadId: id },
    });

    await prisma.cuotaXactividad.deleteMany({
      where: { actividadId: id },
    });

    // 6. Finalmente eliminar la actividad
    await prisma.actividad.delete({
      where: { id },
    });

    console.log(`Actividad ${id} eliminada correctamente`);
  } catch (error) {
    console.error("Error eliminando la actividad:", error);
    throw new Error("No se pudo eliminar la actividad debido a relaciones dependientes");
  }
}


