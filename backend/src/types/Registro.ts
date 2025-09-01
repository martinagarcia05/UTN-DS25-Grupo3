<<<<<<< HEAD
export type Sexo = 'masculino' | 'femenino' | 'otro';
=======
import { Sexo } from "../generated/prisma";
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

export interface RegistroRequest{
    nombre: string;
    apellido: string;
    dni: number;
    password: string;
    fechaNacimiento: Date | string;
    email: string;
    sexo: Sexo;
<<<<<<< HEAD
    fotoCarnet?: string;
=======
    fotoCarnet?: string | null;
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    pais: string;
}

export interface RegistroResponse{
    estadoIngreso: 'ingresoExitoso' | 'ingresoFallido';
<<<<<<< HEAD
    mensaje: string;
}
=======
    mensaje?: string;
}

>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
