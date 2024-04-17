'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/utils/supabase/server';

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

export async function signup(formData: FormData) {
  console.log(formData);
  // const supabase = createClient();

  // // type-casting here for convenience
  // // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string
  // };

  // const { error } = await supabase.auth.signUp(data);

  // if (error) {
  //   console.log('ERROR ON SINGUP: ', error);
  //   // redirect('/error'); // create an error page to redirect when somethong went wrong
  //   // export default function ErrorPage() {
  //   //     return <p>Sorry, something went wrong</p>
  //   //   }
  // }

  // revalidatePath('/', 'layout');
  // redirect('/');
}
