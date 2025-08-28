export interface GetSocioResponse {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: string;
    pais: string;
    sexo: 'masculino' | 'femenino' | 'otro';
    cuotaAlDia: boolean;
}
export interface GetEstadoCuota {
    cuotaAlDia: boolean;
    fechaVencimiento: string;
    montoAdeudado: number;
    message: string;
}
export interface Acceso {
    nombre: string;
    habilitado: boolean;
    motivo?: string;
}
export interface GetAccesosResponse {
    accesos: Acceso[];
}
//# sourceMappingURL=HomeSocioTypes.d.ts.map