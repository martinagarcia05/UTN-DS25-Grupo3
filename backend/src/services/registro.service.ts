import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse } from '../types/Registro';

import { LoginRequest, LoginResponse } from '../types/Login';
import { Sexo } from '../../generated/prisma';
import axios from 'axios';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';

export async function registrarSocio(data: RegistroRequest): Promise<RegistroResponse> {
  try {
    // Verificar si ya existe el email
    const existingUsuario = await prisma.usuario.findUnique({
      where: { email: data.email }
    });
    if (existingUsuario) {
      return { estadoIngreso: 'ingresoFallido', mensaje: 'El email ya está registrado' };
    }

    // Encriptar password
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    // Crear usuario
    const usuario = await prisma.usuario.create({
      data: {
        email: data.email,
        password: hashedPassword,
        rol: 'socio'
      }
    });


    // Crear socio con enum Sexo
    await prisma.socio.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        fechaNacimiento: new Date(data.fechaNacimiento),
        sexo: data.sexo,//sexoEnum,  // usamos la variable con valor del enum
        fotoCarnet: data.fotoCarnet || null,
        usuarioId: usuario.id,
        pais: data.pais.toUpperCase(),
        email: data.email
      }
    });

    return { estadoIngreso: 'ingresoExitoso', mensaje: 'Registro exitoso' };
  } catch (error: any) {
    console.error(error);
    return { estadoIngreso: 'ingresoFallido', mensaje: error.message };
  }
}
// Login de usuario (por email o DNI)
export async function loginUsuario(data: LoginRequest): Promise<LoginResponse> {
  const input = data.emailOdni;
  let usuario = null;

  if (/^\d+$/.test(input)) {
    // Login por DNI
    const dni = parseInt(input, 10);
    usuario = await prisma.usuario.findFirst({
      where: { socio: { dni } },
      include: { socio: true }
    });
  } else {
    // Login por email
    usuario = await prisma.usuario.findUnique({
      where: { email: input },
      include: { socio: true }
    });
  }

  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  if (usuario.rol?.toUpperCase() !== 'ADMIN' && !usuario.socio) {
    throw new Error('Socio no encontrado');
  }

  // Verificar contraseña
  const passwordValido = await bcrypt.compare(data.password, usuario.password);
  if (!passwordValido) {
    throw new Error('Contraseña incorrecta');
  }

  // Generar token JWT
  const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '8h' });

  return {
    rol: usuario.rol as 'socio' | 'admin',
    token,
    mensaje: 'Login exitoso',
    usuario: {
      id: usuario.id,
      email: usuario.email,
      socio: usuario.socio ? {
        id: usuario.socio.id,
        nombre: usuario.socio.nombre,
        apellido: usuario.socio.apellido,
        dni: usuario.socio.dni,
        fechaNacimiento: usuario.socio.fechaNacimiento,
        sexo: usuario.socio.sexo,
        fotoCarnet: usuario.socio.fotoCarnet || null,
        pais: usuario.socio.pais,
        email: usuario.socio.email,
        usuarioId: usuario.socio.usuarioId
      } : null
    }
  };
}

// Crear administrador único
export async function crearAdminUnico(email: string, password: string) {
  const existingAdmin = await prisma.usuario.findUnique({ where: { email } });
  if (existingAdmin) return;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  await prisma.usuario.create({
    data: { email, password: hashedPassword, rol: 'admin' }
  });
}
