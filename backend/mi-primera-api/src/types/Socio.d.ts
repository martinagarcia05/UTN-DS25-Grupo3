import { Sexo, Usuario } from '../../../../generated/prisma/index';
export interface Socio {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    email: string;
    fechaNacimiento: Date;
    pais: string;
    sexo: Sexo;
    fotoCarnet?: string | null;
    usuarioId: number;
}
export interface ActualizarSocioRequest {
    nombre?: string;
    apellido?: string;
    dni?: number;
    email?: string;
    fechaNacimiento?: string;
    pais?: string;
    sexo?: Sexo;
    fotoCarnet?: string;
    usuarioId: number;
}
export interface GetSocioResponse extends Socio {
}
//# sourceMappingURL=Socio.d.ts.map