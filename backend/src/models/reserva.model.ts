export interface Reserva {
  id: string;
  cancha: string;
  fecha: string;
  socioId?: string;
}

export const reservas: Reserva[] = [];