export interface CrearReservaDTO { // dto seria los datos q espera recibir del cliente,
  cancha: string;                  // luego en la bd se sacan los datos de la fecha por ej, del sistema
  fecha: string;
  socioId?: string;
}

