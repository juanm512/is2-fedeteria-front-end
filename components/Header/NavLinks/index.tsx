import {
  IconHome,
  IconReplace,
  IconMapPins,
  IconUsersGroup
} from '@tabler/icons-react';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <>
      <Link
        href="/"
        className="relative group text-primary-500 block font-bold rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:text-primary-400"
        aria-current="page"
      >
        Inicio
        <span className="absolute w-0 h-0.5 bg-primary-400 bottom-2 left-0 sm:left-1/2 sm:-translate-x-[50%] transition-all duration-150 group-hover:w-10/12" />
      </Link>
      <Link
        href="/productos"
        className="relative group text-secondary-500 block font-bold rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:text-secondary-200"
      >
        Productos
        <span className="absolute w-0 h-0.5 bg-secondary-200 bottom-2 left-0 sm:left-1/2 sm:-translate-x-[50%] transition-all duration-150 group-hover:w-10/12" />
      </Link>
      <Link
        href="/sucursales"
        className="relative group text-secondary-500 block font-bold rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:text-secondary-200"
      >
        Sucursales
        <span className="absolute w-0 h-0.5 bg-secondary-200 bottom-2 left-0 sm:left-1/2 sm:-translate-x-[50%] transition-all duration-150 group-hover:w-10/12" />
      </Link>
      <Link
        href="/nosotros"
        className="relative group text-secondary-500 block font-bold rounded-md px-3 py-2 text-sm transition-colors duration-150 hover:text-secondary-200"
      >
        Nosotros
        <span className="absolute w-0 h-0.5 bg-secondary-200 bottom-2 left-0 sm:left-1/2 sm:-translate-x-[50%] transition-all duration-150 group-hover:w-10/12" />
      </Link>
    </>
  );
}
