import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function index() {
  return (
    <main className="flex w-full items-center justify-center min-h-[90vh] h-full px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-600">Error 404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pagina no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Perdon, no hemos podido encontrar la pagina que estabas buscando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={'/'}
            className="relative w-1/2 sm:w-fit rounded-xl bg-secondary-800"
          >
            <span className="flex items-center justify-center rounded-lg text-lg font-medium gap-2 px-4 py-2 bg-gradient-to-tl to-primary-500 from-accent-500 text-text-800 hover:-translate-y-1 will-change-transform transition-transform ">
              Volver al inicio
              <ArrowRight />
            </span>
          </Link>
          <a href="/" className="text-sm font-semibold text-gray-900">
            Contactanos por email <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
