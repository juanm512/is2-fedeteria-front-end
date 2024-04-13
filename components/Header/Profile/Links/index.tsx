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

export default function ProfileLinks() {
  const logged = true;
  return (
    <>
      {!logged ? (
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
          <Link
            href="/perfil"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            <IconUserCircle /> Perfil
          </Link>
          {/* <Link
            href="/perfil/editar"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            <IconEditCircle />
            Editar Perfil
          </Link> */}
          <Link
            href="/moderation"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            <IconLogs />
            Panel Moderacion
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            <IconDeviceDesktopAnalytics />
            Estadisticas
          </Link>
          <form
            className="w-full"
            action={async () => {
              'use server';
              console.log('log out clicked');
            }}
          >
            <button
              className="flex w-full items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-2"
            >
              <IconLogout2 /> Cerrar sesión
            </button>
          </form>
        </>
      )}
    </>
  );
}
