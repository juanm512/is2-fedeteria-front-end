import { z } from 'zod';

const MIN_NOT_ALCANCED = (campo: string, len: number) =>
  `${campo}: debe tener más de ${len} caractéres de logitud.`;
const MAX_EXCEDED = (campo: string, len: number) =>
  `${campo}: debe tener menos de ${len} caractéres de logitud.`;

export const signupSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, MIN_NOT_ALCANCED('Nombre', 2))
    .max(100, MAX_EXCEDED('Nombre', 100)),
  apellido: z
    .string()
    .trim()
    .min(2, MIN_NOT_ALCANCED('Apellido', 2))
    .max(100, MAX_EXCEDED('Apellido', 100)),
  dni: z
    .string()
    .trim()
    .min(7, MIN_NOT_ALCANCED('DNI', 7))
    .max(10, MAX_EXCEDED('DNI', 10)),
  email: z.string().email().max(100, MAX_EXCEDED('Email', 100)),
  phone: z
    .string()
    .trim()
    .min(8, MIN_NOT_ALCANCED('Numero de contacto', 8))
    .max(11, MAX_EXCEDED('Numero de contacto', 11)),
  password: z
    .string()
    .min(6, MIN_NOT_ALCANCED('Contraseña', 6))
    .max(100, MAX_EXCEDED('Contraseña', 100)),
  password_valid: z.literal('1', {
    errorMap: () => ({
      message: 'La Contraseña debe ser valida.'
    })
  }),
  repeat_password_valid: z.literal('1', {
    errorMap: () => ({
      message: 'Las Contraseñas no coinciden.'
    })
  }),
  policies_and_conditions: z.literal('on', {
    errorMap: () => ({
      message: 'La casilla de aceptación no esta marcada.'
    })
  })
});
// .superRefine(({ password, repeat_password }, ctx) => {
//   if (password !== repeat_password) {
//     ctx.addIssue({
//       path: ['repeat_password'],
//       code: 'custom',
//       message: 'Las contraseñas no son iguales!'
//     });
//   }
// });

export type FormSchemaType = z.infer<typeof signupSchema>;
