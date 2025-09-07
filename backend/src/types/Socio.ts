import { Sexo, Usuario } from '../../generated/prisma';

export interface Socio {  //modelo completo de un socio
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  email: string;
  fechaNacimiento: Date; 
  pais: string;
  sexo: Sexo;
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
  sexo?: Sexo;
  fotoCarnet?: string; 
  usuarioId: number;
}

export interface GetSocioResponse extends Socio {} //devuelve el socio actualizado