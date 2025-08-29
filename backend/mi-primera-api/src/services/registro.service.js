"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarSocio = registrarSocio;
exports.loginUsuario = loginUsuario;
exports.crearAdminUnico = crearAdminUnico;
const prisma_1 = __importDefault(require("../config/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Registro_1 = require("../types/Registro");
const Login_1 = require("../types/Login");
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto';
async function registrarSocio(data) {
    // Verificar si ya existe el email
    const existingUsuario = await prisma_1.default.usuario.findUnique({
        where: { email: data.email }
    });
    if (existingUsuario) {
        return { estadoIngreso: 'ingresoFallido', mensaje: 'El email ya está registrado' };
    }
    // Encriptar password
    const hashedPassword = await bcrypt_1.default.hash(data.password, SALT_ROUNDS);
    // Crear usuario
    const usuario = await prisma_1.default.usuario.create({
        data: {
            email: data.email,
            password: hashedPassword,
            rol: 'socio'
        }
    });
    // Crear socio asociado
    await prisma_1.default.socio.create({
        data: {
            nombre: data.nombre,
            apellido: data.apellido,
            dni: data.dni,
            fechaNacimiento: new Date(data.fechaNacimiento),
            sexo: data.sexo,
            fotoCarnet: data.fotoCarnet,
            usuarioId: usuario.id,
            pais: data.pais,
            email: data.email
        }
    });
    return { estadoIngreso: 'ingresoExitoso', mensaje: 'Registro exitoso' };
}
async function loginUsuario(data) {
    const input = data.emailOdni; // puede ser email o DNI
    let usuario = null;
    if (/^\d+$/.test(input)) {
        // Si solo tiene números, asumimos que es DNI
        const dni = parseInt(input);
        usuario = await prisma_1.default.usuario.findFirst({
            where: { socio: { dni } },
            include: { socio: true }
        });
    }
    else {
        // Si tiene letras, asumimos que es email
        usuario = await prisma_1.default.usuario.findUnique({
            where: { email: input },
            include: { socio: true }
        });
    }
    if (!usuario) {
        return { rol: 'socio', mensaje: 'Usuario no encontrado' };
    }
    const passwordValido = await bcrypt_1.default.compare(data.password, usuario.password);
    if (!passwordValido) {
        return { rol: 'socio', mensaje: 'Contraseña incorrecta' };
    }
    const token = jsonwebtoken_1.default.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '8h' });
    // Devolvemos usuario completo para guardar en frontend
    return {
        rol: usuario.rol,
        token,
        mensaje: 'Login exitoso',
        usuario: {
            id: usuario.id,
            email: usuario.email,
            socio: {
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
            }
        }
    };
}
// Función para crear administrador único
async function crearAdminUnico(email, password) {
    const existingAdmin = await prisma_1.default.usuario.findUnique({ where: { email } });
    if (existingAdmin)
        return;
    const hashedPassword = await bcrypt_1.default.hash(password, SALT_ROUNDS);
    await prisma_1.default.usuario.create({
        data: { email, password: hashedPassword, rol: 'admin' }
    });
}
//# sourceMappingURL=registro.service.js.map