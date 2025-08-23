import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse } from '../types/registro';
import { LoginRequest } from '../types/login';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';

export async function registrarSocio(data: RegistroRequest): Promise<RegistroResponse> {
  // Verificar si ya existe el email
  const existingUsuario = await prisma.usuario.findUnique({
    where: { email: data.email }
  });
  if (existingUsuario) {
    return { estadoIngreso: 'ingresoFallido' as const, mensaje: 'El email ya está registrado' };
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

  // Crear socio asociado
  await prisma.socio.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      dni: data.dni,
      fechaNacimiento: new Date(data.fechaNacimiento),
      sexo: data.sexo,
      fotoCarnet: data.fotoCarnet,
      usuarioId: usuario.id
    }
  });

  return { estadoIngreso: 'ingresoExitoso' as const, mensaje: 'Registro exitoso' };
}


export async function loginUsuario(data: LoginRequest) {
  const usuario = await prisma.usuario.findUnique({
    where: { email: data.email }
  });

  if (!usuario) {
    return { rol: 'socio', mensaje: 'Usuario no encontrado' };
  }

  const passwordValido = await bcrypt.compare(data.password, usuario.password);
  if (!passwordValido) {
    return { rol: 'socio', mensaje: 'Contraseña incorrecta' };
  }

  // Generar token JWT
  const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '8h' });

  return { rol: usuario.rol, token };
}

// Función para crear administrador único
export async function crearAdminUnico(email: string, password: string) {
  const existingAdmin = await prisma.usuario.findUnique({ where: { email } });
  if (existingAdmin) return;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  await prisma.usuario.create({
    data: { email, password: hashedPassword, rol: 'admin' }
  });
}
