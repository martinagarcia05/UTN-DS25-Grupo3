import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export async function login(req: Request, res: Response) {
  try {
    const result = await authService.login(req.body);

    res.json({
      success: true,
      data: result, // { token, user }
    });
  } catch (err: any) {
    console.error("Error en login:", err);
    res.status(401).json({
      success: false,
      message: err.message || 'Error en login',
    });
  }
}
