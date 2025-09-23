
//ESTO HAY QUE MODIFICARLO TODO NO SE COMO SERIA PARA SEPARAR ENTRE SOCIO Y ADMIN SERIA SOLO USUARIO?
export type Sexo = 'MASCULINO' | 'FEMENINO' | 'OTRO';

export type Role = 'USER' | 'ADMIN';

export interface UserData {
  id: number;
  nombre: string;
  apellido: string;
  fecha: Date;
  email: string;
  password: string;         
  role: Role;
  sexo?: Sexo | null;        
  createdAt: Date;
}

export interface CreateUserRequest {
  nombre: string;
  apellido: string;
  fecha: Date;
  email: string;
  password: string;
  role: Role;
  sexo?: Sexo | null;

}

export interface UpdateUserRequest {
  nombre?: string;
  apellido?: string;
  fecha?: Date;
  email?: string;
  password?: string;
  role?: Role;
  sexo?: Sexo | null;
  tema?: Categoria | null;
}

export interface UserResponse {
  user: Omit<UserData, 'password'>;
  message: string;
}

export interface UsersListResponse {
  users: Omit<UserData, 'password'>[];
  total: number;
  message: string;
}
