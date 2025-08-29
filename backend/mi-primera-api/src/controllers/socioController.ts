
import { Request, Response } from "express";
import * as socioService from '../services/socioService';

export async function getSocioByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  //Endpoint para registrar socio
  console.log("Buscando socio con DNI:", dni);  // <- acá

  if (isNaN(dni)) return res.status(400).json({ error: 'DNI inválido' });

  try {
    const socio = await socioService.getSocioByDni(dni);
    if (!socio) return res.status(404).json({ error: 'Socio no encontrado' });
    res.json(socio); // devuelve { id: 1 } si existe
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar socio' });
  }
}


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

