import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse } from '../types/Registro';
import { z, ZodError } from 'zod';

import { LoginRequest, LoginResponse } from '../types/Login';
import { Sexo } from '../../generated/prisma';

export enum PaisesLatam {
  ARGENTINA = 'ARGENTINA',
  BOLIVIA = 'BOLIVIA',
  BRASIL = 'BRASIL',
  CHILE = 'CHILE',
  COLOMBIA = 'COLOMBIA',
  COSTA_RICA = 'COSTA_RICA',
  CUBA = 'CUBA',
  ECUADOR = 'ECUADOR',
  EL_SALVADOR = 'EL_SALVADOR',
  GUATEMALA = 'GUATEMALA',
  HONDURAS = 'HONDURAS',
  MEXICO = 'MEXICO',
  NICARAGUA = 'NICARAGUA',
  PANAMA = 'PANAMA',
  PARAGUAY = 'PARAGUAY',
  PERU = 'PERU',
  PUERTO_RICO = 'PUERTO_RICO',
  REPUBLICA_DOMINICANA = 'REPUBLICA_DOMINICANA',
  URUGUAY = 'URUGUAY',
  VENEZUELA = 'VENEZUELA'
}
import axios from 'axios';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';

const RegistroSocioSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es requerido." }),
  apellido: z.string().min(1, { message: "El apellido es requerido." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
  
  dni: z.number().refine(val => val.toString().length === 8, {
    message: "El DNI debe tener exactamente 8 dígitos."
  }),

  email: z.string()
    .email("Formato de email inválido.") 
    .transform(val => val.toLowerCase())
    .refine(val => val.endsWith('@gmail.com'), {
      message: "El email debe ser una cuenta de gmail.com"
    }),
  
  fechaNacimiento: z.coerce.date({
    invalid_type_error: "La fecha proporcionada no es válida.",
  })
  .min(new Date("1945-01-01"), { message: "El año de nacimiento debe ser 1945 o posterior." })
  .max(new Date("2025-12-31"), { message: "El año de nacimiento no puede ser posterior a 2025." }),

  sexo: z.nativeEnum(Sexo),
  pais: z.nativeEnum(PaisesLatam),
  fotoCarnet: z.string().optional().nullable(),
});


export async function registrarSocio(data: RegistroRequest): Promise<RegistroResponse> {
  const validationResult = RegistroSocioSchema.safeParse(data);

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
        // --- CAMBIO AQUÍ: validatedData.fechaNacimiento ya es un objeto Date ---
        fechaNacimiento: validatedData.fechaNacimiento,
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
  const { emailOdni, password } = data; 
  let usuario;

  if (/^\d+$/.test(emailOdni)) {
    const dni = parseInt(emailOdni, 10);
    const socio = await prisma.socio.findUnique({
      where: { dni: dni },
    });

    if (!socio) {
      return { rol: 'socio', mensaje: 'Credenciales inválidas' };
    }

    usuario = await prisma.usuario.findUnique({
      where: { id: socio.usuarioId },
      include: {
        socio: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            dni: true,
            fechaNacimiento: true,
            sexo: true,
            fotoCarnet: true,
            pais: true,
            email: true,
            usuarioId: true,
            estado: true,
          },
        },
      },
    });

  } else {
    // Lógica para buscar por email
    usuario = await prisma.usuario.findUnique({
      // 3. Usar 'emailOdni' en la consulta por email
      where: { email: emailOdni }, 
      include: {
        socio: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            dni: true,
            fechaNacimiento: true,
            sexo: true,
            fotoCarnet: true,
            pais: true,
            email: true,
            usuarioId: true,
            estado: true,
          },
        },
      },
    });
  }

  if (!usuario) {
    return { rol: 'socio', mensaje: 'Credenciales inválidas' };
  }

  // Verificar contraseña
  const passwordValida = await bcrypt.compare(password, usuario.password);
  if (!passwordValida) {
    return { rol: 'socio', mensaje: 'Credenciales inválidas' };
  }

  // Generar token
  const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '1h' });

  return {
    rol: usuario.rol as 'socio' | 'admin',
    token: token,
    usuario: {
      id: usuario.id,
      email: usuario.email,
      socio: usuario.socio
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
