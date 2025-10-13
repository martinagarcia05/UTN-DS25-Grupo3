export interface CrearCanchaDTO {
  nombre: string;
  descripcion?: string | null;
  actividadId: number;
  activa?: boolean;
}

export interface ActualizarCanchaDTO {
  nombre?: string;
  descripcion?: string | null;
  activa?: boolean;
}


