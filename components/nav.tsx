import {
  IconBell,
  IconEditCircle,
  IconReplace,
  IconHome,
  IconLogout2,
  IconUserCircle,
  IconMapPins,
  IconUsersGroup
} from '@tabler/icons-react';
import Image from 'next/image';

export default async function Nav() {
  return (
    <nav className="bg-secondary-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button -->*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/*<!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*<!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

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
                <a
                  href="#"
                  className="bg-primary-500 text-text-800 font-bold rounded-md px-3 py-2 text-sm"
                  aria-current="page"
                >
                  <span className="flex items-center gap-2">
                    <IconHome />
                    Inicio
                  </span>
                </a>
                <a
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IconReplace />
                    Productos
                  </span>
                </a>
                <a
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IconMapPins />
                    Sucursales
                  </span>
                </a>
                <a
                  href="#"
                  className="text-text-200 hover:bg-secondary-800 hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium"
                >
                  <span className="flex items-center gap-2">
                    <IconUsersGroup />
                    Nosotros
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-text-300 hover:text-text-100 focus:outline-none focus:ring-2 focus:ring-white focus:bg-accent-600 focus:text-text-50"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <IconBell />
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="relative">
              <button
                type="button"
                className="relative flex  overflow-hidden rounded-full bg-secondary-default text-sm focus:outline-none focus:ring-2 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <Image
                  width={32}
                  height={32}
                  className=" h-8 w-8 rounded-full object-contain"
                  src="/fedeteria_logos/Fedeteria_Solo_Logo.svg"
                  alt="Fedeteria_Solo_Logo"
                />
              </button>

              {/*<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-secondary-800 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  <IconUserCircle /> Perfil
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-1"
                >
                  <IconEditCircle />
                  Editar Perfil
                </a>
                <a
                  href="#"
                  className="flex items-center gap-4 hover:bg-secondary-600 px-4 py-2 text-sm text-text-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                >
                  <IconLogout2 /> Cerrar sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-primary-500 text-text-800 font-semibold", Default: "text-text-200 hover:bg-secondary-800 hover:text-text-100" --> */}
          <a
            href="#"
            className="bg-primary-500 text-text-800 font-bold block rounded-md px-3 py-2 text-base"
            aria-current="page"
          >
            <span className="flex items-center gap-2">
              <IconHome />
              Inicio
            </span>
          </a>
          <a
            href="#"
            className="text-text-200 hover:bg-secondary-800 hover:text-text-100 block rounded-md px-3 py-2 text-base font-medium"
          >
            <span className="flex items-center gap-2">
              <IconReplace />
              Productos
            </span>
          </a>
          <a
            href="#"
            className="text-text-200 hover:bg-secondary-800 hover:text-text-100 block rounded-md px-3 py-2 text-base font-medium"
          >
            <span className="flex items-center gap-2">
              <IconMapPins />
              Sucursales
            </span>
          </a>
          <a
            href="#"
            className="text-text-200 hover:bg-secondary-800 hover:text-text-100 block rounded-md px-3 py-2 text-base font-medium"
          >
            <span className="flex items-center gap-2">
              <IconUsersGroup />
              Nosotros
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
