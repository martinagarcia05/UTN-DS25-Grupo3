import prisma from '../config/prisma';
import { ActualizarCanchaDTO, CrearCanchaDTO } from '../types/cancha';

export const canchaService = {
  async listarPorActividad(actividadId: number) {
    return prisma.cancha.findMany({
      where: { actividadId },
      orderBy: { id: 'asc' },
    });
  },

  async crear(data: CrearCanchaDTO) {
    return prisma.cancha.create({ data });
  },

  async actualizar(id: number, data: ActualizarCanchaDTO) {
    return prisma.cancha.update({ where: { id }, data });
  },

  async eliminar(id: number) {
    return prisma.cancha.delete({ where: { id } });
  },
};


