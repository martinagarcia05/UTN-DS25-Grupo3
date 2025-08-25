import { Socio } from '../models/Socio';
import { Request, Response } from "express";

let socios: Socio[] = [
    {nombre: 'Martina', apellido: 'Garcia Amendola', dni: 46628935, email: 'marti.garcia.amendola@gmail.com', pswd: '1234'},
    {nombre: 'Milagros', apellido: 'Crespo', dni: 22222222, email: 'milicrespo@yahoo.com.ar', pswd: '0000'},
    {nombre: 'Lucia', apellido: 'Meza', dni: 22444222, email: 'Lulimeza04@hotmail.com', pswd: '9000'},
    {nombre: 'Valentin', apellido: 'Rodriguez', dni: 22444022, email: 'valentinrodriguez2903@gmail.com', pswd: '9900'},
    {nombre: 'Tomas', apellido: 'Bellizzi', dni: 22499922, email: 'tomy.bellizzi@gmail.com', pswd: '8800'},
    {nombre: 'Admin', apellido: 'Admin', dni: 0, email: 'admin@gmail.com', pswd: '@dmIn1234'}
]

//Endpoint para registrar socio
export const postSocio = (req: Request, res: Response) => {
  const { nombre, apellido, dni, email, pswd } = req.body;
  if (!socios.find(s => s.dni === dni)) {
    res.status(201).json({
        message: "Socio creado",
        socio: { nombre, apellido, dni, email, pswd  }
    }); 
  } else{
    res.status(400).json({message: 'El socio ya existe'})
  }
};

//Endpoint para validar la cuenta del socio: recibe contraseña y devuelve t o f dependiendo si es correcta
export const postValidarPswd = (req: Request, res: Response) =>{
  //const dniS = parseInt(req.params.dni)
  const { dni, pswd } = req.body; // recibe contraseña en el cuerpo
  const socio = socios.find(s => s.dni === dni)
  if (!socio) {
    return res.status(404).json({message: 'El socio no se ha encontrado'})
  }
  const esValida = socio.pswd === pswd;
  res.json({ valid: esValida });
}
//Endpoint paraq updateSocio
export const updateSocio = (req: Request, res: Response) => {
  const idS = parseInt(req.params.id)
  const { nombre, apellido, dni, email, pswd } = req.body;
  const socioIndex = socios.findIndex(s => s.dni === idS);
  if (socioIndex !== -1) {
    socios[socioIndex] = { nombre, apellido, dni, email, pswd };
    res.json({
        message: "Socio actualizado",
        socio: { nombre, apellido, dni, email, pswd }
    });
  } else {
    res.status(404).json({message: 'El socio no se ha encontrado'})
  }
};
