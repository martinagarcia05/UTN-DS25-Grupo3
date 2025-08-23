export interface LoginRequest {
  emailOdni: string;
  password: string;
}


export interface LoginResponse {
  rol: 'socio' | 'admin';
  token?: string; 
  mensaje?: string;
}
