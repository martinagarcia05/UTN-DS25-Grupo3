import {} from 'yup';


// modificar con yup
export const LoginSchema = yup.object({
  emailOdni: yu.string().min(3, 'Debe ingresar un email o DNI'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});