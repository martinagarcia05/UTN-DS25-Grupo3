import { Request, Response, NextFunction } from 'express';  
import { updateSocio as updateSocioService } from '../services/socioService';  
import { GetSocioResponse, ActualizarSocioRequest } from '../types/Socio';  // importo las interfaces

export async function updateSocio(req: Request<{ id: string }, GetSocioResponse, ActualizarSocioRequest>, res: Response<GetSocioResponse>, next: NextFunction) {  // funcion del controller para PUT /api/socios/:id
  try {
    const id = parseInt(req.params.id);  // obtengo el ID de la URL y lo convierto a int
    const updatedSocio = await updateSocioService(id, req.body);  // llamo al servidor para actualizar con los datos del body
    res.json(updatedSocio);  // mando el socio actualizado como respuesta JSON
  } catch (error) {  
    next(error);
  }
}