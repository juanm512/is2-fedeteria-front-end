import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex items-center justify-center h-[80dvh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-600"></p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Confirma tu email
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Hemos enviado un email de confirmacion a tu direccion de correo
          electronico.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/auth/login"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Iniciar sesion
          </Link>
          <Link href="#" className="text-sm font-semibold text-gray-900">
            Ir al inicio <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
