import { Request, Response } from 'express';
import * as socioService from '../services/socioService';
import { ActualizarSocioRequest } from '../types/Socio';

export async function getSocioByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  if (Number.isNaN(dni)) return res.status(400).json({ success: false, message: 'DNI inválido' });

  try {
    const idObj = await socioService.getSocioByDni(dni);
    if (!idObj) {
      return res.status(404).json({ message: 'Socio no encontrado' });
    }

    const socio = await socioService.getSocioById(idObj.id);
    if (!socio) {
      return res.status(404).json({ message: 'Socio no encontrado' });
    }

    return res.json({ success: true, socio });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export async function updateSocioByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  if (Number.isNaN(dni)) return res.status(400).json({ success: false, message: 'DNI inválido' });

  const datos = req.body as ActualizarSocioRequest;
  try {
    const socioActualizado = await socioService.updateSocioByDni(dni, datos);
    return res.json({ success: true, socio: socioActualizado });
  } catch (err: any) {
    console.error(err);
    const status = err.statusCode || (err.code === 'P2025' ? 404 : 500);
    return res.status(status).json({
      success: false,
      message: err.message || 'Error al actualizar',
      error: status === 500 ? 'Internal server error' : err.name,
      timestamp: new Date().toISOString()
    });
  }
}

// let socios: Socio[] = [
//     {nombre: 'Martina', apellido: 'Garcia Amendola', dni: 46628935, email: 'marti.garcia.amendola@gmail.com', pswd: '1234'},
//     {nombre: 'Milagros', apellido: 'Crespo', dni: 22222222, email: 'milicrespo@yahoo.com.ar', pswd: '0000'},
//     {nombre: 'Lucia', apellido: 'Meza', dni: 22444222, email: 'Lulimeza04@hotmail.com', pswd: '9000'},
//     {nombre: 'Valentin', apellido: 'Rodriguez', dni: 22444022, email: 'valentinrodriguez2903@gmail.com', pswd: '9900'},
//     {nombre: 'Tomas', apellido: 'Bellizzi', dni: 22499922, email: 'tomy.bellizzi@gmail.com', pswd: '8800'},
//     {nombre: 'Admin', apellido: 'Admin', dni: 0, email: 'admin@gmail.com', pswd: '@dmIn1234'}
// ]

// //Endpoint para registrar socio

// export const postSocio = (req: Request, res: Response) => {
//   const { nombre, apellido, dni, email, pswd } = req.body;
//   if (!socios.find(s => s.dni === dni)) {
//     res.status(201).json({
//         message: "Socio creado",
//         socio: { nombre, apellido, dni, email, pswd  }
//     }); 
//   } else{
//     res.status(400).json({message: 'El socio ya existe'})
//   }
// };

// //Endpoint para validar la cuenta del socio: recibe contraseña y devuelve t o f dependiendo si es correcta
// export const postValidarPswd = (req: Request, res: Response) =>{
//   //const dniS = parseInt(req.params.dni)
//   const { dni, pswd } = req.body; // recibe contraseña en el cuerpo
//   const socio = socios.find(s => s.dni === dni)
//   if (!socio) {
//     return res.status(404).json({message: 'El socio no se ha encontrado'})
//   }
//   const esValida = socio.pswd === pswd;
//   res.json({ valid: esValida });
// }