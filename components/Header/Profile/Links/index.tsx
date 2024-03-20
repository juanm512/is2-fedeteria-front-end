import {
  IconLogin,
  IconUserCircle,
  IconEditCircle,
  IconLogs,
  IconDeviceDesktopAnalytics,
  IconLogout2
} from '@tabler/icons-react';
import Link from 'next/link';

export default function ProfileLinks() {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-secondary-800 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-data-[state=expanded]:block group-data-[state=collapsed]:hidden group-data-[state=expanded]:opacity-100 group-data-[state=collapsed]:opacity-0 transition-all duration-300"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex={-1}
    >
      {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
      <Link
        href="/login"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
      >
        <IconLogin /> Iniciar sesión
      </Link>
      <Link
        href="/perfil"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-0"
      >
        <IconUserCircle /> Perfil
      </Link>
      <Link
        href="/perfil/editar"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-1"
      >
        <IconEditCircle />
        Editar Perfil
      </Link>
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
      <Link
        href="/logout"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
      >
        <IconLogout2 /> Cerrar sesión
      </Link>
    </div>
  );
}
