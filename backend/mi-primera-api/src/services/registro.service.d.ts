import { RegistroRequest, RegistroResponse } from '../types/Registro';
import { LoginRequest, LoginResponse } from '../types/Login';
export declare function registrarSocio(data: RegistroRequest): Promise<RegistroResponse>;
export declare function loginUsuario(data: LoginRequest): Promise<LoginResponse>;
export declare function crearAdminUnico(email: string, password: string): Promise<void>;
//# sourceMappingURL=registro.service.d.ts.map