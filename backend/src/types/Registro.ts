import { Sexo } from "../../generated/prisma";

export interface RegistroRequest{
    nombre: string;
    apellido: string;
    dni: number;
    password: string;
    fechaNacimiento: Date | string;
    email: string;
    sexo: Sexo;
    fotoCarnet?: string | null;
    pais: string;
}

export interface RegistroResponse{
    estadoIngreso: 'ingresoExitoso' | 'ingresoFallido';
    mensaje?: string;
}

