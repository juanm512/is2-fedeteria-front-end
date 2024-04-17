import {
  IconLogin,
  IconUserCircle,
  IconEditCircle,
  IconLogs,
  IconDeviceDesktopAnalytics,
  IconLogout2,
  IconForms
} from '@tabler/icons-react';
import Link from 'next/link';
import { createClient } from '@/lib/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function ProfileLinks() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const { user } = data;

  const logout = async () => {
    'use server';
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    console.log('error al cerrar sesion: ', error);
    revalidatePath('/', 'layout');
    redirect('/');
  };

  return (
    <>
      {!data || error ? (
        <>
          <Link
            href="/auth/login"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            <IconLogin /> Iniciar sesión
          </Link>
          <Link
            href="/auth/register"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            <IconForms />
            Registrarme
          </Link>
        </>
      ) : (
        <>
          <p className="flex items-center justify-center gap-4 underline text-sm font-medium px-4 py-2 text-text-200">
            Hola, {user ? user.user_metadata.first_name : 'Usuario'}
          </p>
          <Link
            href="/mi-perfil"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            <IconUserCircle /> Perfil
          </Link>
          {data?.user?.user_metadata.role !== 'normal' && (
            <Link
              href="/moderacion"
              className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-1"
            >
              <IconLogs />
              Panel Moderacion
            </Link>
          )}
          {data?.user?.user_metadata.role !== 'normal' &&
            data?.user?.user_metadata.role !== 'moderador' && (
              <Link
                href="/administracion"
                className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-1"
              >
                <IconDeviceDesktopAnalytics />
                Estadisticas
              </Link>
            )}
          <form className="w-full" action={logout}>
            <button
              className="flex w-full items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
              role="menuitem"
              tabIndex={-1}
              type="submit"
            >
              <IconLogout2 /> Cerrar sesión
            </button>
          </form>
        </>
      )}
    </>
  );
}
