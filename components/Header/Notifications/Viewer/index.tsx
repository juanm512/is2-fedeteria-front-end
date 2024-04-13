import {
  IconLogin,
  IconUserCircle,
  IconEditCircle,
  IconLogs,
  IconDeviceDesktopAnalytics,
  IconLogout2
} from '@tabler/icons-react';
import Link from 'next/link';

export default function NavigationViewer() {
  {
    /*<!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */
  }
  return (
    <>
      {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
      <Link
        href="#"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
      >
        <IconLogin /> Iniciar sesión
      </Link>
      <Link
        href="#"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-0"
      >
        <IconUserCircle /> Perfil
      </Link>
      <Link
        href="#"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-1"
      >
        <IconEditCircle />
        Editar Perfil
      </Link>
      <Link
        href="#"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-1"
      >
        <IconLogs />
        Panel Moderacion
      </Link>
      <Link
        href="#"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-1"
      >
        <IconDeviceDesktopAnalytics />
        Estadisticas
      </Link>
      <Link
        href="#"
        className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
        role="menuitem"
        tabIndex={-1}
        id="user-menu-item-2"
      >
        <IconLogout2 /> Cerrar sesión
      </Link>
    </>
  );
}
