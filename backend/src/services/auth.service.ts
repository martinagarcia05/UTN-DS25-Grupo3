import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginRequest } from '../types/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';

export async function login(data: LoginRequest) {
  const { emailOdni, password } = data;
  let usuario;

  if (/^\d+$/.test(emailOdni)) {
    // Caso DNI
    const socio = await prisma.socio.findUnique({
      where: { dni: parseInt(emailOdni, 10) },
    });

    if (!socio) throw new Error('Credenciales inválidas');

    usuario = await prisma.usuario.findUnique({
      where: { id: socio.usuarioId },
      include: { socio: true },
    });
  } else {
    // Caso Email
    usuario = await prisma.usuario.findUnique({
      where: { email: emailOdni },
      include: { socio: true },
    });
  }

  if (!usuario) throw new Error('Credenciales inválidas');

  // Validar contraseña
  const passwordValida = await bcrypt.compare(password, usuario.password);
  if (!passwordValida) throw new Error('Credenciales inválidas');

  // Generar token
  const token = jwt.sign(
    { id: usuario.id, role: usuario.rol.toUpperCase() }, 
    JWT_SECRET,
    { expiresIn: '1h' }
  );


  const { password: _, ...resto } = usuario;
  return {
    token,
    user: {
      id: resto.id,
      email: resto.email,
      role: resto.rol.toUpperCase(), 
      socio: resto.socio,
    },
  };
}
