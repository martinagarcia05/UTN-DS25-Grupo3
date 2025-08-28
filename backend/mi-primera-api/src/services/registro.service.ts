import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse } from '../types/Registro';
import { LoginRequest, LoginResponse } from '../types/login';
import { Sexo } from '../../../../generated/prisma';

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

    // Mapear el string recibido a un valor del enum Sexo
    const sexoEnum: Sexo =
      data.sexo === 'FEMENINO' ? Sexo.FEMENINO :
      data.sexo === 'MASCULINO' ? Sexo.MASCULINO :
      data.sexo === 'OTRO' ? Sexo.OTRO :
      (() => { throw new Error(`Valor de sexo inválido: ${data.sexo}`); })();

    // Crear socio con enum Sexo
    await prisma.socio.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        dni: data.dni,
        fechaNacimiento: new Date(data.fechaNacimiento),
        sexo: sexoEnum,  
        fotoCarnet: data.fotoCarnet || null,
        usuarioId: usuario.id,
        pais: data.pais,
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
    return { rol: 'socio', mensaje: 'Usuario no encontrado' };
  }

  // Verificar contraseña
  const passwordValido = await bcrypt.compare(data.password, usuario.password);
  if (!passwordValido) {
    return { rol: 'socio', mensaje: 'Contraseña incorrecta' };
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
      socio: {
        id: usuario.socio!.id,
        nombre: usuario.socio!.nombre,
        apellido: usuario.socio!.apellido,
        dni: usuario.socio!.dni,
        fechaNacimiento: usuario.socio!.fechaNacimiento,
        sexo: usuario.socio!.sexo,
        fotoCarnet: usuario.socio!.fotoCarnet || null,
        pais: usuario.socio!.pais,
        email: usuario.socio!.email,
        usuarioId: usuario.socio!.usuarioId
      }
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
