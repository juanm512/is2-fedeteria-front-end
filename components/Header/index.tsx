import {
  IconReplace,
  IconHome,
  IconMapPins,
  IconUsersGroup,
  IconEditCircle,
  IconLogout2,
  IconUserCircle,
  IconLogin,
  IconLogs,
  IconDeviceDesktopAnalytics
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from '@/components/Header/MobileMenu';
import Notifications from '@/components/Header/Notifications';
import Profile from '@/components/Header/Profile';

export default async function Nav() {
  return (
    <nav className="w-full bg-secondary-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <MobileMenu>
            <div
              className="absolute -ml-2 w-screen bg-secondary-700 top-16 sm:hidden group-data-[state=expanded]:opacity-100 group-data-[state=collapsed]:opacity-0 transition-all duration-300"
              id="mobile-menu"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* <!-- Current: "bg-primary-500 text-text-800 font-semibold", Default: "text-text-200 hover:bg-secondary-800 hover:text-text-100" --> */}
                <Link
                  href="#"
                  className="bg-primary-500 text-text-800 font-bold block rounded-md px-3 py-2 text-base"
                  aria-current="page"
                >
                  <span className="flex items-center gap-2">
                    <IconHome />
                    Inicio
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 block rounded-md px-3 py-2 text-base font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IconReplace />
                    Productos
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 block rounded-md px-3 py-2 text-base font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IconMapPins />
                    Sucursales
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 block rounded-md px-3 py-2 text-base font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IconUsersGroup />
                    Nosotros
                  </span>
                </Link>
              </div>
            </div>
          </MobileMenu>

          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="relative h-16 aspect-video flex flex-shrink-0 items-center">
              <Image
                width={100}
                height={100}
                className="h-fit w-fit object-contain"
                src="/fedeteria_logos/Fedeteria_Horizontal.svg"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-primary-500 text-text-800 font-semibold", Default: "text-text-200 hover:bg-secondary-800 hover:text-text-100" --> */}
                <Link
                  href="#"
                  className="bg-primary-500 text-text-800 font-bold rounded-md px-3 py-2 text-sm transition-transform duration-150 hover:-translate-y-0.5"
                  aria-current="page"
                >
                  <span className="flex items-center gap-2">
                    <IconHome />
                    Inicio
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    <IconReplace />
                    Productos
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    <IconMapPins />
                    Sucursales
                  </span>
                </Link>
                <Link
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    <IconUsersGroup />
                    Nosotros
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center gap-1 sm:gap-4 pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Notifications>
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-secondary-800 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-data-[state=expanded]:block group-data-[state=collapsed]:hidden group-data-[state=expanded]:opacity-100 group-data-[state=collapsed]:opacity-0 transition-all duration-300"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                a
              </div>
            </Notifications>
            <Profile>
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-secondary-800 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-data-[state=expanded]:block group-data-[state=collapsed]:hidden group-data-[state=expanded]:opacity-100 group-data-[state=collapsed]:opacity-0 transition-all duration-300"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
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
              </div>
            </Profile>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    </nav>
  );
}
