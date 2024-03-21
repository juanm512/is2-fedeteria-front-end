import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full min-h-[30vh] h-fit py-8 px-4 flex flex-col sm:flex-row items-center justify-between bg-secondary-700 text-text-300">
      <div className="flex h-full w-full sm:w-4/12 px-2 flex-col items-center sm:items-start justify-start gap-2">
        <div className="relative aspect-video w-10/12 mx-auto">
          <Image
            alt="logo fedeteria principal"
            fill
            src={'/fedeteria_logos/Fedeteria_Principal.png'}
            className=" object-scale-down"
          />
        </div>
      </div>
      <div className="flex h-full w-full sm:w-4/12 px-2 flex-col items-start sm:items-end justify-start gap-2">
        <Link href={'/'} className="">
          Inicio
        </Link>
        <Link href={'/'} className="">
          Productos
        </Link>
        <Link href={'/'} className="">
          Sucursales
        </Link>
        <Link href={'/'} className="">
          Acerca de nosotros
        </Link>
      </div>
      <div className="flex h-full w-full sm:w-4/12 px-2 flex-col items-end justify-start gap-2">
        <Link href={'/'} className="">
          Preguntas Frecuentes
        </Link>
        <Link href={'/'} className="">
          Contacto:
        </Link>
        <Link href={'/'} className="">
          Tel.: 138123423
        </Link>
        <Link href={'/'} className="">
          Email: dasdbasi@fdsvifsd.com
        </Link>
        <Link href={'/'} className="">
          Politicas de Privacidad
        </Link>
      </div>
    </footer>
  );
}
