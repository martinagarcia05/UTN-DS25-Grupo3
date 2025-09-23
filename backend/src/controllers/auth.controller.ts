import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { LoginRequest } from '../types/auth';

export async function login(req: Request, res: Response) {
  try {
    const body: LoginRequest = req.body;
    const result = await authService.login(body);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Error en login:', error);
    return res
      .status(error.statusCode || 401)
      .json({ success: false, message: error.message || 'Error en login' });
  }
}
