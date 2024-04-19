'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/utils/supabase/server';
import { signupSchema } from '@/lib/zod-schemas/user-schema';

export async function login(prevState: any, formData: FormData) {
  const supabase = createClient();

  const { data: dataEmail, error: errorEmail } = await getEmailByDNI(
    formData.get('dni') as string
  );

  if (errorEmail || !dataEmail) {
    return 'Credenciales de inicio de sesion invalidas!';
  }

  const userData = {
    email: dataEmail.email,
    password: formData.get('password') as string
  };

  const { data, error } = await supabase.auth.signInWithPassword(userData);

  console.log('DATA ON LOGIN: ', data);
  if (error) {
    console.log('ERROR ON LOGIN: ', error);
    return 'Credenciales de inicio de sesion invalidas!';
  }

  revalidatePath('/', 'layout');
  redirect('/mi-perfil');
}

export async function signup(prevState: any, formData: FormData) {
  // console.log(formData);
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

  const dniResponse = await dniAlreadyExists(userData.dni as string);
  if (dniResponse.error) {
    return [dniResponse.error];
  } else if (dniResponse.data) {
    return ['DNI ya utilizado'];
  }
  const emailResponse = await emailAlreadyExists(userData.email as string);
  if (emailResponse.error) {
    return [emailResponse.error];
  } else if (emailResponse.data) {
    return ['Email ya utilizado'];
  }

  const supabase = createClient();

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
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/auth/confirm-email');
}

const emailAlreadyExists = async (email: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id,dni')
    .eq('email', email);

  console.log('DATA ON email ALREADY EXISTS: ', data);
  console.log('ERROR ON email ALREADY EXISTS: ', error);
  if (error) {
    return { data: null, error: error.message };
  }

  if (!data || data === undefined || data === null || data.length == 0) {
    return { data: false, error: null };
  }

  return { data: true, error: null };
};
const dniAlreadyExists = async (dni: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id,email')
    .eq('dni', dni);

  console.log('DATA ON DNI ALREADY EXISTS: ', data);
  console.log('ERROR ON DNI ALREADY EXISTS: ', error);
  if (error) {
    return { data: null, error: error.message };
  }

  if (!data || data === undefined || data === null || data.length == 0) {
    return { data: false, error: null };
  }

  return { data: true, error: null };
};

const getEmailByDNI = async (dni: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id,email')
    .eq('dni', dni);

  console.log('DATA ON GET EMAIL BY DNI: ', data);
  console.log('ERROR ON GET EMAIL BY DNI: ', error);
  if (error) {
    return { data: null, error: error.message };
  }

  if (!data || data === undefined || data === null || data.length == 0) {
    return { data: null, error: null };
  }

  return { data: data[0], error: null };
};
