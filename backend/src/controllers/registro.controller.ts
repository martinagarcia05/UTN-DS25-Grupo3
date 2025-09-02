import { Request, Response } from 'express';
import { registrarSocio, loginUsuario } from '../services/registro.service';
import { RegistroRequest, RegistroResponse } from '../types/Registro';
import { LoginRequest, LoginResponse } from '../types/Login';
export const registroController = async (req: Request, res: Response) => {
  try {
    const body: RegistroRequest = req.body;
    const resultado: RegistroResponse = await registrarSocio(body);
    return res.status(resultado.estadoIngreso === 'ingresoExitoso' ? 201 : 400).json(resultado);
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({ estadoIngreso: 'ingresoFallido', mensaje: error.message });
  }
};
export const loginController = async (req: Request, res: Response) => { 
  try {
    const body: LoginRequest = req.body; 
    const resultado = await loginUsuario(body); 

    if ('token' in resultado && resultado.token) {
      // Incluimos usuario en la respuesta
      const respuesta: LoginResponse = {
        rol: resultado.rol,
        token: resultado.token,
        mensaje: resultado.mensaje,
        usuario: resultado.usuario
      };
      return res.status(200).json(respuesta);
    } else {
      return res.status(401).json({
        rol: resultado.rol,
        mensaje: resultado.mensaje
      });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Login fallido', error: error.message });
  }
};