export type Sexo = 'masculino' | 'femenino' | 'otro';

export interface RegistroRequest{
    nombre: string;
    apellido: string;
    dni: number;
    password: string;
    fechaNacimiento: Date | string;
    email: string;
    sexo: Sexo;
    fotoCarnet?: string;
    pais: string;
}

export interface RegistroResponse{
    estadoIngreso: 'ingresoExitoso' | 'ingresoFallido';
    mensaje: string;
}
