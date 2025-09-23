import { Sexo, paisesLatam } from '@prisma/client';
import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import {
  CreateUserRequest,
  UpdateUserRequest,
  UserData,
} from '../types/user';

const SALT_ROUNDS = 10;

// Obtener todos los usuarios
export async function getAllUsers(limit: number = 10): Promise<UserData[]> {
  const users = await prisma.usuario.findMany({
    take: limit,
    orderBy: { id: 'asc' },
    include: { socio: true },
  });

  return users.map(({ password, ...u }) => ({
    ...u,
    role: u.rol as 'ADMIN' | 'SOCIO' | 'ADMINISTRATIVO',
  }));
}

// Obtener un usuario por ID
export async function getUserById(id: number): Promise<UserData> {
  const user = await prisma.usuario.findUnique({
    where: { id },
    include: { socio: true },
  });

  if (!user) {
    const error = new Error('Usuario no encontrado') as any;
    error.statusCode = 404;
    throw error;
  }

  const { password, ...userWithoutPassword } = user;
  return {
    ...userWithoutPassword,
    role: user.rol as 'ADMIN' | 'SOCIO' | 'ADMINISTRATIVO',
  };
}

// Crear usuario
export async function createUser(data: CreateUserRequest): Promise<UserData> {
  const exists = await prisma.usuario.findUnique({ where: { email: data.email } });
  if (exists) {
    const error = new Error('Email ya registrado') as any;
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  const newUser = await prisma.usuario.create({
  data: {
    email: data.email,
    password: hashedPassword,
    rol: data.role,
    socio: data.socio
      ? {
          create: {
            email: data.email, 
            nombre: data.socio.nombre,
            apellido: data.socio.apellido,
            dni: data.socio.dni,
            fechaNacimiento: new Date(data.socio.fechaNacimiento), 
            pais: data.socio.pais as paisesLatam, 
            sexo: data.socio.sexo as Sexo,        
            fotoCarnet: data.socio.fotoCarnet ?? null,
          },
        }
      : undefined,
  },
  include: { socio: true },
});



  const { password, ...userWithoutPassword } = newUser;
  return {
    ...userWithoutPassword,
    role: newUser.rol as 'ADMIN' | 'SOCIO' | 'ADMINISTRATIVO',
  };
}

// Actualizar usuario
export async function updateUser(
  id: number,
  data: UpdateUserRequest
): Promise<UserData> {
  const updateData: any = { ...data };

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }

  if (data.socio) {
    updateData.socio = {
      update: data.socio,
    };
  }

  const updatedUser = await prisma.usuario.update({
    where: { id },
    data: updateData,
    include: { socio: true },
  });

  const { password, ...userWithoutPassword } = updatedUser;
  return {
    ...userWithoutPassword,
    role: updatedUser.rol as 'ADMIN' | 'SOCIO' | 'ADMINISTRATIVO',
  };
}

// Eliminar usuario
export async function deleteUser(id: number): Promise<void> {
  try {
    await prisma.usuario.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Usuario no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}

export async function registerSocio(data: {
  nombre: string;
  apellido: string;
  dni: number;
  email: string;
  password: string;
  fechaNacimiento: string;
  sexo: Sexo;
  pais: paisesLatam;
  fotoCarnet?: string | null;
}): Promise<UserData> {
  const exists = await prisma.usuario.findUnique({ where: { email: data.email } });
  if (exists) {
    const error = new Error('Email ya registrado') as any;
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  const newUser = await prisma.usuario.create({
    data: {
      email: data.email,
      password: hashedPassword,
      rol: 'SOCIO',
      socio: {
        create: {
          nombre: data.nombre,
          apellido: data.apellido,
          dni: data.dni,
          fechaNacimiento: new Date(data.fechaNacimiento),
          pais: data.pais,
          sexo: data.sexo,
          fotoCarnet: data.fotoCarnet ?? null,
          email: data.email.toLowerCase(),
        },
      },
    },
    include: { socio: true },
  });

  const { password, ...userWithoutPassword } = newUser;
  return {
    ...userWithoutPassword,
    role: 'SOCIO',
  };
}
