export interface LoginRequest {
    emailOdni: string;
    password: string;
}
export interface UsuarioResponse {
    id: number;
    nombre?: string;
    apellido?: string;
    dni?: number;
    fechaNacimiento?: Date;
    sexo?: 'M' | 'F' | 'O';
    fotoCarnet?: string;
    pais?: string;
    email?: string;
}
export interface LoginResponse {
    rol: 'socio' | 'admin';
    token?: string;
    mensaje?: string;
    usuario?: UsuarioResponse;
}
//# sourceMappingURL=Login.d.ts.map