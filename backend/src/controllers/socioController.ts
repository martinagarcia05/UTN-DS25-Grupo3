import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";
import * as socioService from '../services/socioService';
import multer from 'multer';
import path from 'path';

//manejo de la subida de la foto de perfil a la carpeta uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '/uploads'); 
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const { dni } = req.body;
    const ext = path.extname(file.originalname); 
    cb(null, `socio-${dni}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

export async function getSocioByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  console.log("Buscando socio con DNI:", dni);

  if (isNaN(dni)) return res.status(400).json({ error: 'DNI inválido' });

  try {
    const socio = await socioService.getSocioByDni(dni);
    if (!socio) return res.status(404).json({ error: 'Socio no encontrado' });
    res.json(socio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar socio' });
  }
}

export async function getAllSocios(req: Request, res: Response, next: NextFunction) {
  try {
    const socios = await prisma.socio.findMany();
    res.json({ socios });
  } catch (error) {
    next(error);
  }
}

export async function getSocioCompletoByDni(req: Request, res: Response) {
  const dni = Number(req.params.dni);
  console.log("Buscando socio completo con DNI:", dni);

  if (isNaN(dni)) return res.status(400).json({ error: 'DNI inválido' });

  try {
    const socio = await socioService.getSocioCompletoByDni(dni);
    if (!socio) return res.status(404).json({ error: 'Socio no encontrado' });
    res.json(socio);
  } catch (error) {
    console.error('Error al buscar socio:', error);
    res.status(500).json({ error: 'Error al buscar socio' });
  }
}

export async function updateSocio(req: Request, res: Response) {
  const { nombre, apellido, dni, email, fechaNacimiento, pais, sexo } = req.body;
  const foto = req.file;

  try {
    let fotoPath = null;
    if (foto) {
      fotoPath = `/uploads/${foto.filename}`;
    }

    const socio = await prisma.socio.update({
      where: { dni: Number(dni) },
      data: {
        nombre,
        apellido,
        email,
        fechaNacimiento: new Date(fechaNacimiento),
        pais,
        sexo,
        ...(fotoPath && { fotoCarnet: fotoPath }), //se actualiza solo si se subio una foto nueva
      },
    });

    res.json(socio);
  } catch (error) {
    console.error('Error al actualizar socio:', error);
    res.status(500).json({ error: 'Error al actualizar socio' });
  }
}
