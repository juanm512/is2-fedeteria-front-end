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
        className="bg-gradient-to-tl to-primary-500 from-accent-500 text-text-800 block font-bold rounded-md px-3 py-2 text-sm will-change-transform transition-transform duration-150 hover:-translate-y-0.5"
        aria-current="page"
      >
        <span className="flex items-center gap-2">
          <IconHome />
          Inicio
        </span>
      </Link>
      <Link
        href="/productos"
        className="text-text-200 hover:bg-gradient-to-tl to-accent-900 from-secondary-800 block hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium will-change-transform transition-transform duration-150 hover:-translate-y-0.5"
      >
        <span className="flex items-center gap-2">
          <IconReplace />
          Productos
        </span>
      </Link>
      <Link
        href="/sucursales"
        className="text-text-200 hover:bg-gradient-to-tl to-accent-900 from-secondary-800  block hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium will-change-transform transition-transform duration-150 hover:-translate-y-0.5"
      >
        <span className="flex items-center gap-2">
          <IconMapPins />
          Sucursales
        </span>
      </Link>
      <Link
        href="/nosotros"
        className="text-text-200 hover:bg-gradient-to-tl to-accent-900 from-secondary-800  block hover:text-text-100 rounded-md px-3 py-2 text-sm font-medium will-change-transform transition-transform duration-150 hover:-translate-y-0.5"
      >
        <span className="flex items-center gap-2">
          <IconUsersGroup />
          Nosotros
        </span>
      </Link>
    </>
  );
}
