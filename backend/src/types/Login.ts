import { Usuario } from '../../generated/prisma';
import { Socio } from '../../generated/prisma';

export interface LoginRequest {
  emailOdni: string;
  password: string;
}

export interface UsuarioResponse {
  id: number;
  email: string;
  socio: Socio | null;
}

export interface LoginResponse {
  rol: 'socio' | 'admin';
  token?: string; 
  mensaje?: string;
  usuario?: UsuarioResponse;
}
