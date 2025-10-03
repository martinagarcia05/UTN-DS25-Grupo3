import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import * as userService from '../services/user.service';

export async function login(req: Request, res: Response) {
  try {
    const result = await authService.login(req.body);

    res.json({
      success: true,
      data: result, 
    });
  } catch (err: any) {
    console.error("Error en login:", err);
    res.status(401).json({
      success: false,
      message: err.message || 'Error en login',
    });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const socio = await userService.registerSocio(req.body);

    res.status(201).json({
      success: true,
      message: 'Registro exitoso',
      data: socio,
    });
  } catch (error: any) {
    res.status(error.statusCode || 400).json({
      success: false,
      message: error.message || 'Error en el registro',
    });
  }
}
<<<<<<< HEAD
=======

>>>>>>> 4984085b62b96c728315e65fb0d23c3507cd8bf0
export async function registerAdministrativo(req: Request, res: Response) {
  try {
    const administrativo = await userService.createAdministrativo(req.body);

    res.status(201).json({
      success: true,
      message: 'Registro exitoso',
      data: administrativo,
    });
  } catch (error: any) {
    res.status(error.statusCode || 400).json({
      success: false,
      message: error.message || 'Error en el registro',
    });
  }
}