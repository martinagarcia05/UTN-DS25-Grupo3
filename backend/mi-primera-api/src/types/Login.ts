interface LoginRequest {
  email: string;
  password: string;
}


interface LoginResponse {
  rol: 'socio' | 'admin';
}
