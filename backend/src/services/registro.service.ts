import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse } from '../types/Registro';
import { z, ZodError } from 'zod'; // Importar Zod

import { LoginRequest, LoginResponse } from '../types/Login';
// Importar Sexo desde Prisma Client y definir PaisesLatam manualmente si no existe
import { Sexo } from '../generated/prisma';

export enum PaisesLatam {
  ARGENTINA = 'ARGENTINA',
  BRASIL = 'BRASIL',
  CHILE = 'CHILE',
  COLOMBIA = 'COLOMBIA',
  ECUADOR = 'ECUADOR',
  PARAGUAY = 'PARAGUAY',
  PERU = 'PERU',
  URUGUAY = 'URUGUAY',
  VENEZUELA = 'VENEZUELA'
}
import axios from 'axios';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';

const RegistroSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es requerido." }),
  apellido: z.string().min(1, { message: "El apellido es requerido." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
  
  dni: z.number().refine(val => val.toString().length === 8, {
    message: "El DNI debe tener exactamente 8 dígitos."
  }),

  email: z.string()
    .email({ message: "Formato de email inválido." })
    .transform(val => val.toLowerCase()) //mayuscula o minuscula es lo mismo
    .refine(val => val.endsWith('@gmail.com'), {
      message: "El email debe ser una cuenta de gmail.com"
    }),
  
  fechaNacimiento: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Fecha de nacimiento inválida." }),
  sexo: z.nativeEnum(Sexo),
  pais: z.nativeEnum(PaisesLatam), // Usar el enum PaisesLatam importado
  fotoCarnet: z.string().optional().nullable(),
});


export async function registrarSocio(data: RegistroRequest): Promise<RegistroResponse> {
  const validationResult = RegistroSchema.safeParse(data);

  if (!validationResult.success) {
    const primerError = validationResult.error.issues[0].message;
    

    throw new Error(`Error de validación: ${primerError}`);
  }

  const validatedData = validationResult.data;

  try {
    const existingUsuario = await prisma.usuario.findUnique({
      where: { email: validatedData.email }
    });
    if (existingUsuario) {
      return { estadoIngreso: 'ingresoFallido', mensaje: 'El email ya está registrado' };
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, SALT_ROUNDS);


    const usuario = await prisma.usuario.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        rol: 'socio'
      }
    });


    await prisma.socio.create({
      data: {
        nombre: validatedData.nombre,
        apellido: validatedData.apellido,
        dni: validatedData.dni,
        fechaNacimiento: new Date(validatedData.fechaNacimiento),
        sexo: validatedData.sexo,
        fotoCarnet: validatedData.fotoCarnet || null,
        usuarioId: usuario.id,
        pais: validatedData.pais, 
        email: validatedData.email
      }
    });

    return { estadoIngreso: 'ingresoExitoso', mensaje: 'Registro exitoso' };
  } catch (error: any) {
    if (error instanceof ZodError) {
      const formattedErrors = error.format();
    
      console.error(formattedErrors);
      throw { status: 400, errors: formattedErrors };
    }
    console.error(error);
    return { estadoIngreso: 'ingresoFallido', mensaje: "Error interno del servidor durante el registro." };
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
