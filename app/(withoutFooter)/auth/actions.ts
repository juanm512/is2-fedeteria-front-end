'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/utils/supabase/server';
import { signupSchema } from '@/lib/zod-schemas/user-schema';

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log('ERROR ON LOGIN: ', error);
    // redirect('/error'); // create an error page to redirect when somethong went wrong
    // export default function ErrorPage() {
    //     return <p>Sorry, something went wrong</p>
    //   }
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(prevState: any, formData: FormData) {
  console.log(formData);
  const userData = {
    nombre: formData.get('first-name'),
    apellido: formData.get('last-name'),
    dni: formData.get('dni'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    password_valid: formData.get('pw-valid'),
    repeat_password_valid: formData.get('repeat-pw-valid'),
    policies_and_conditions: formData.get('policies_and_conditions')
  };
  const validatedFields = signupSchema.safeParse(userData);
  // console.log({ ...validatedFields.error });
  // Return early if the form data is invalid
  if (!formData.get('sucursal')) {
    return ['No hay ninguna sucursal seleccionada!'];
  }
  if (!validatedFields.success) {
    const errorsMsgs: string[] = [];
    validatedFields.error.issues.forEach((issue) => {
      // console.log(issue.message, issue.path[0]);
      errorsMsgs.push(issue.message);
    });
    return errorsMsgs;
  }

  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        dni: userData.dni as string,
        first_name: userData.nombre as string,
        last_name: userData.apellido as string,
        phone: userData.phone as string,
        sucursal: formData.get('sucursal') as string,
        offers: formData.get('offers') ? true : false,
        role: 'normal'
      }
    }
  });

  if (error) {
    console.log('ERROR ON SINGUP: ', error);
    // redirect('/error'); // create an error page to redirect when somethong went wrong
    // export default function ErrorPage() {
    //     return <p>Sorry, something went wrong</p>
    //   }
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
