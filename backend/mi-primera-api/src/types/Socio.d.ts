export interface Socio {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    email: string;
    fechaNacimiento: Date;
    pais: string;
    sexo: string;
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
    sexo?: 'M' | 'F' | 'otro';
    fotoCarnet?: string;
    usuarioId: number;
}
export interface GetSocioResponse extends Socio {
}
//# sourceMappingURL=Socio.d.ts.map