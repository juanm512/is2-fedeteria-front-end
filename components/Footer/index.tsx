import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-center px-4 text-gray-800">
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Recibi ofertas exclusivas de productos de nuestra ferreteria!
        </h1>
        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-none my-7" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <a href="#" className="relative w-32 h-8 ">
            <Image
              alt="logo fedeteria principal"
              fill
              src={'/fedeteria_logos/Fedeteria_Horizontal.svg'}
              className="object-scale-down"
            />
          </a>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-500 hover:underline"
              >
                Inicio
              </a>
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-500 hover:underline"
              >
                Productos
              </a>
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-500 hover:underline"
              >
                Sucursales
              </a>
              <a
                href="#"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-500 hover:underline"
              >
                ALGO MAS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /* <footer className="w-full min-h-[30vh] h-fit py-8 px-4 flex flex-col sm:flex-row items-center justify-between bg-secondary-700 text-text-300">
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
    </footer> */
}
