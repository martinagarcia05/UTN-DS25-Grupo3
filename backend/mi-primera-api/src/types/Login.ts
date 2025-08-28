import { Usuario } from '../../../../generated/prisma/index';
import { Socio } from '../../../../generated/prisma';

export interface LoginRequest {
  emailOdni: string;
  password: string;
}

export interface UsuarioResponse {
  id: number;
  email: string;
  socio: Socio;
}

export interface LoginResponse {
  rol: 'socio' | 'admin';
  token?: string; 
  mensaje?: string;
  usuario?: UsuarioResponse;
}
