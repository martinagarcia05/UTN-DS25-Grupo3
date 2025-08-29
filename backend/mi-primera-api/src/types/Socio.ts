import { Sexo, Usuario } from '../../../../generated/prisma/index';

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

export interface ActualizarSocioResponse {
success: boolean;
socio?: {
id: number;
nombre: string;
apellido: string;
dni: string;
email: string;
fechaNacimiento: string;
pais: 'Argentina' | 'Bolivia' | 'Brasil' | 'Chile' | 'Colombia' | 'Costa Rica' | 'Cuba' | 'República Dominicana' | 'Ecuador' | 'El Salvador' | 'Guatemala' | 'Honduras' | 'México' | 'Nicaragua' | 'Panamá' | 'Paraguay' | 'Perú' | 'Uruguay' | 'Venezuela';
sexo: 'masculino' | 'femenino' | 'otro';
fotoCarnet?: string; // URL de la foto
};
message?: string;
}
export interface GetSocioResponse extends Socio {} //devuelve el socio actualizado