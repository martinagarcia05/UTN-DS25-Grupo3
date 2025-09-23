import { UserData } from './user';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: Omit<UserData, 'password'>; 
  };
}
