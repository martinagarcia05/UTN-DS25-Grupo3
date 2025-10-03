export interface Administrativo {
  id: number;
  usuarioId: number;
  nombre: string;
  apellido: string;
  dni: string;

}

export interface CreateAdministrativoRequest {
    nombre: string;
    apellido: string;
    dni: string;
    telefono?: string; 
    usuarioId: number;
}

export interface updateAdministrativoRequest { 
    nombre?: string;
    apellido?: string;
    dni?: string;
    telefono?: string; 
    usuarioId: number;
}

