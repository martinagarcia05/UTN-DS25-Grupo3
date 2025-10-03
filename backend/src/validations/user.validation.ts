import { z } from 'zod';

const roleEnum = z.enum(['ADMIN', 'ADMINISTRATIVO', 'SOCIO']);

const socioSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  apellido: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
  dni: z.number().int().positive().refine(val => val.toString().length === 8, {
    message: 'El DNI debe tener exactamente 8 dígitos',
  }),
  fechaNacimiento: z.coerce.date().refine(
    (val) => !isNaN(val.getTime()),
    { message: 'La fecha de nacimiento no es válida' }
  ),
  pais: z.string().min(2, { message: 'Debe indicar un país válido' }),
  sexo: z.enum(['MASCULINO', 'FEMENINO', 'OTRO']),
  fotoCarnet: z.url({ message: 'Debe ser una URL válida' }).optional().nullable(),
});

const administrativoSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  apellido: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
  dni: z.coerce.number().int().positive().refine(val => val.toString().length === 8, {
    message: 'El DNI debe tener exactamente 8 dígitos',
  }),
});

export const UpdateUserSchema = z.object({
  email: z.string().email("Email inválido").trim().optional(),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .optional(),
  role: roleEnum.optional(),
  socio: socioSchema.optional(),
  administrativo: administrativoSchema.optional(),
}).superRefine((data, ctx) => {
  if (data.role === "SOCIO" && !data.socio) {
    ctx.addIssue({
      code: "custom",
      path: ["socio"],
      message: "Los datos de socio son obligatorios cuando el rol es SOCIO",
    });
  }
  if (data.role === "ADMINISTRATIVO" && !data.administrativo) {
    ctx.addIssue({
      code: "custom",
      path: ["administrativo"],
      message: "Los datos de administrativo son obligatorios cuando el rol es ADMINISTRATIVO",
    });
  }
});

export const RegisterSchema = z.object({
  email: z.email('Email inválido').trim(),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  role: roleEnum,
  socio: socioSchema.optional(),
  administrativo: administrativoSchema.optional(),
}).superRefine((data, ctx) => {
  if (data.role === 'SOCIO' && !data.socio) {
    ctx.addIssue({
      code: 'custom',
      path: ['socio'],
      message: 'Los datos de socio son obligatorios',
    });
  }
  if (data.role === 'ADMINISTRATIVO' && !data.administrativo) {
    ctx.addIssue({
      code: 'custom',
      path: ['administrativo'],
      message: 'Los datos de administrativo son obligatorios',
    });
  }
});
