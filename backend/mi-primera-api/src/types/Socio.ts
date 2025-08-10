export interface Socio {  //modelo completo de un socio
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  fechaNacimiento: string; 
  pais: 'Argentina' | 'Bolivia' | 'Brasil' | 'Chile' | 'Colombia' | 'Costa Rica' | 'Cuba' | 'República Dominicana' | 'Ecuador' | 'El Salvador' | 'Guatemala' | 'Honduras' | 'México' | 'Nicaragua' | 'Panamá' | 'Paraguay' | 'Perú' | 'Uruguay' | 'Venezuela';
  sexo: 'masculino' | 'femenino' | 'otro';
  fotoCarnet?: string;
}

export interface ActualizarSocioRequest { //interface para la solicitud de actualizar los datos
  nombre?: string;
  apellido?: string;
  dni?: string;
  email?: string;
  fechaNacimiento?: string; 
  pais?: 'Argentina' | 'Bolivia' | 'Brasil' | 'Chile' | 'Colombia' | 'Costa Rica' | 'Cuba' | 'República Dominicana' | 'Ecuador' | 'El Salvador' | 'Guatemala' | 'Honduras' | 'México' | 'Nicaragua' | 'Panamá' | 'Paraguay' | 'Perú' | 'Uruguay' | 'Venezuela';
  sexo?: 'masculino' | 'femenino' | 'otro';
  fotoCarnet?: string; 
}

export interface GetSocioResponse extends Socio {} //devuelve el socio actualizado