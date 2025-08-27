import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse } from '../types/Registro';
import { LoginRequest, LoginResponse } from '../types/Login';
import { $Enums } from '@prisma/client';

type PrismaSexo = $Enums.Sexo;


// Tu tipo público (minúsculas)
export type Sexo = 'masculino' | 'femenino' | 'otro';

// ---------- MAPPERS ----------

// Mapas de conversión
const upMap: Record<Sexo, PrismaSexo> = {
  masculino: 'MASCULINO',
  femenino: 'FEMENINO',
  otro: 'OTRO',
} as const;

const downMap: Record<PrismaSexo, Sexo> = {
  MASCULINO: 'masculino',
  FEMENINO: 'femenino',
  OTRO: 'otro',
} as const;

// Público -> Prisma (minúsculas -> MAYÚSCULAS)
export const sexoToPrisma = (s: Sexo): PrismaSexo => upMap[s];

// Prisma -> Público (MAYÚSCULAS -> minúsculas)
export const sexoFromPrisma = (s: PrismaSexo): Sexo => downMap[s];

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
    sexo: sexoToPrisma(data.sexo),
    fotoCarnet: data.fotoCarnet,
    usuarioId: usuario.id,
    pais: data.pais,
    email: data.email  
  }
});


  return { estadoIngreso: 'ingresoExitoso' as const, mensaje: 'Registro exitoso' };
}

export async function loginUsuario(data: LoginRequest): Promise<LoginResponse> {
  const input = data.emailOdni; // puede ser email o DNI
  let usuario = null;

  if (/^\d+$/.test(input)) {
    // Si solo tiene números, asumimos que es DNI
    const dni = parseInt(input);
    usuario = await prisma.usuario.findFirst({
      where: { socio: { dni } },
      include: { socio: true }
    });
  } else {
    // Si tiene letras, asumimos que es email
    usuario = await prisma.usuario.findUnique({
      where: { email: input },
      include: { socio: true }
    });
  }

  if (!usuario) {
    return { rol: 'socio', mensaje: 'Usuario no encontrado' };
  }

  const passwordValido = await bcrypt.compare(data.password, usuario.password);
  if (!passwordValido) {
    return { rol: 'socio', mensaje: 'Contraseña incorrecta' };
  }

  const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '8h' });

  // Devolvemos usuario completo para guardar en frontend
  return {
    rol: usuario.rol as 'socio' | 'admin',
    token,
    mensaje: 'Login exitoso',
    usuario: {
      id: usuario.id,
      nombre: usuario.socio?.nombre,
      apellido: usuario.socio?.apellido,
      dni: usuario.socio?.dni,
      fechaNacimiento: usuario.socio?.fechaNacimiento,
      sexo: usuario.socio?.sexo as Sexo,
      fotoCarnet: usuario.socio?.fotoCarnet || undefined,
      pais: usuario.socio?.pais,
      email: usuario.email
    }
  };
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
