import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginRequest, LoginResponse } from '../types/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const { email, password } = data;

  let usuario = null;

  // Permitir login por DNI o email
  if (/^\d+$/.test(email)) {
    // es un DNI
    const socio = await prisma.socio.findUnique({
      where: { dni: parseInt(email, 10) },
    });
    if (!socio) {
      const error = new Error('Credenciales inválidas') as any;
      error.statusCode = 401;
      throw error;
    }
    usuario = await prisma.usuario.findUnique({
      where: { id: socio.usuarioId },
      include: { socio: true },
    });
  } else {
    // es un email
    usuario = await prisma.usuario.findUnique({
      where: { email },
      include: { socio: true },
    });
  }

  if (!usuario) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  const validPassword = await bcrypt.compare(password, usuario.password);
  if (!validPassword) {
    const error = new Error('Credenciales inválidas') as any;
    error.statusCode = 401;
    throw error;
  }

  // Generar token
  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, role: usuario.rol },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  // Retornar sin password
  const { password: _, ...userWithoutPassword } = usuario;

  return {
    success: true,
    data: {
      token,
      user: {
        ...userWithoutPassword,
        role: usuario.rol as 'ADMIN' | 'SOCIO',
      },
    },
  };
}
