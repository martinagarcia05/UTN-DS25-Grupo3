export interface Administrativo {
  id: number;
  usuarioId: number;
  nombre: string;
  apellido: string;
  dni: string;
  telefono?: string | null;
}


export interface updateAdministrativoRequest { 
    nombre?: string;
    apellido?: string;
    dni?: string;
    telefono?: string; 
    usuarioId: number;
}

