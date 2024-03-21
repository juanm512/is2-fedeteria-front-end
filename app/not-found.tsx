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
          <a
            href="/"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Volver al inicio
          </a>
          <a href="/" className="text-sm font-semibold text-gray-900">
            Contactanos por email <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
