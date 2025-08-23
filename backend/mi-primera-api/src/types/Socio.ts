import { Usuario } from '../../../../generated/prisma/index';

export interface Socio {  //modelo completo de un socio
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  email: string;
  fechaNacimiento: Date; 
  pais: string;
  sexo: string;
  fotoCarnet?: string | null;
  usuarioId: number; 
}

export interface ActualizarSocioRequest { //interface para la solicitud de actualizar los datos
  nombre?: string;
  apellido?: string;
  dni?: number;
  email?: string;
  fechaNacimiento?: string; 
  pais?: string;
  sexo?: 'masculino' | 'femenino' | 'otro';
  fotoCarnet?: string; 
  usuarioId: number;
}

export interface GetSocioResponse extends Socio {} //devuelve el socio actualizado