export interface RegistroRequest{
    nombre: string;
    apellido: string;
    dni: number;
    password: string;
    fechaNacimiento: Date | string;
    email: string;
    sexo: string;
    fotoCarnet?: string;
}

export interface RegistroResponse{
    estadoIngreso: 'ingresoExitoso' | 'ingresoFallido';
    mensaje?: string;
}

