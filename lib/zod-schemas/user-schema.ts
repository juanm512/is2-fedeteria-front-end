import { z } from 'zod';

// //Creating an object schema
// const signupSchema = z.object({
//   username: z
//     .string({ required_error: 'Username is required' })
//     .trim()
//     .min(3, {
//       message: 'Username must be at least 3 chars'
//     })
//     .max(255, { message: 'Username must not be more than 255 chars long' }),
//   email: z
//     .string({ required_error: 'Email is required' })
//     .trim()
//     .min(3, {
//       message: 'Email must be at least 3 chars'
//     })
//     .max(255, { message: 'Email must not be more than 255 chars long' }),
//   phone: z
//     .string({ required_error: 'Phone number is required' })
//     .trim()
//     .min(3, {
//       message: 'Phone number must be at least 10 chars'
//     })
//     .max(255, { message: 'Phone number must not be more than 20 chars long' }),
//   password: z
//     .string({ required_error: 'Password is required' })
//     .trim()
//     .min(3, {
//       message: 'Password must be at least 6 chars'
//     })
//     .max(255, { message: 'Password must not be more than 1024 chars long' })
// });

// module.exports = signupSchema;

const REQUIRED_FIELD_ERROR = 'Campo obligatorio';
const MIN_NOT_ALCANCED = (len: number) =>
  `El campo debe tener más de ${len} caractéres`;

export const schema = z
  .object({
    name: z.string().nonempty(REQUIRED_FIELD_ERROR).min(6, MIN_NOT_ALCANCED(6)),
    email: z.string().nonempty(REQUIRED_FIELD_ERROR),
    password: z
      .string()
      .nonempty(REQUIRED_FIELD_ERROR)
      .min(6, MIN_NOT_ALCANCED(6)),
    repeat_password: z
      .string()
      .nonempty(REQUIRED_FIELD_ERROR)
      .min(6, MIN_NOT_ALCANCED(6)),
    accept: z.literal(true, {
      errorMap: () => ({
        message: 'Para continuar você deve aceitar os termos.'
      })
    }),
    bornDay: z
      .string()
      .nonempty(REQUIRED_FIELD_ERROR)
      .min(6, MIN_NOT_ALCANCED(6))
  })
  .superRefine(({ password, repeat_password }, ctx) => {
    if (password !== repeat_password) {
      ctx.addIssue({
        path: ['repeat_password'],
        code: 'custom',
        message: 'Las contraseñas no son iguales!'
      });
    }
  });

export type FormSchemaType = z.infer<typeof schema>;
