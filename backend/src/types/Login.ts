<<<<<<< HEAD
import { Sexo } from "./Registro";
=======
import { Usuario } from '../generated/prisma';
import { Socio } from '../generated/prisma';
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

export interface LoginRequest {
  emailOdni: string;
  password: string;
}

export interface UsuarioResponse {
  id: number;
<<<<<<< HEAD
  nombre?: string;
  apellido?: string;
  dni?: number;
  fechaNacimiento?: Date;
  sexo?: Sexo;
  fotoCarnet?: string;
  pais?: string;
  email?: string;
=======
  email: string;
  socio: Socio;
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
}

export interface LoginResponse {
  rol: 'socio' | 'admin';
  token?: string; 
  mensaje?: string;
  usuario?: UsuarioResponse;
<<<<<<< HEAD
}
=======
}
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
