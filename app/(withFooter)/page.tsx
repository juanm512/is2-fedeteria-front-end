import {
  IconArrowUpRight,
  IconBox,
  IconDiscount,
  IconExchange
} from '@tabler/icons-react';
import Image from 'next/image';

import Sucursales from '@/components/Shared/Sucursales';

export const metadata = {
  title: 'Fedeteria',
  description: 'Una web para hacer trueques.'
};

export default async function IndexPage() {
  return (
    <>
      {/* hero de toda la vida */}
      <section className="mx-auto flex flex-col sm:flex-row items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[95vh] py-8 px-2 sm:px-8">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-1 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-primary-600">
                    Fedeteria
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Bienvenido a nuestra web!
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <IconExchange className="absolute left-1 top-1 h-5 w-5 text-primary-500" />
                        Intercambia productos.
                      </dt>
                      <dd className="inline ml-1">
                        Intercambia productos que no necesites con los demas.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <IconDiscount className="absolute left-1 top-1 h-5 w-5 text-primary-500" />
                        Ganá puntos!
                      </dt>
                      <dd className="inline ml-1">
                        Con cada intercambio podes ganar puntos para descuentos
                        en la Fedeteria.
                      </dd>
                    </div>
                    <div className="w-full flex items-center justify-start gap-4 ">
                      <button className="relative w-1/2 sm:w-fit rounded-xl bg-secondary-800">
                        <span className="flex items-center justify-center rounded-lg text-lg font-medium gap-2 px-4 py-2 bg-gradient-to-tl to-primary-500 from-accent-500 text-text-800 hover:-translate-y-1 will-change-transform transition-transform ">
                          Publicar <IconBox />
                        </span>
                      </button>
                      <button className="relative w-1/2 sm:w-fit rounded-xl bg-accent-500">
                        <span className="flex items-center justify-center rounded-lg text-lg font-medium gap-2 px-4 py-2 text-accent-400 bg-gradient-to-tl to-accent-900 from-secondary-800 hover:-translate-y-1 will-change-transform transition-transform ">
                          Ver productos <IconArrowUpRight />
                        </span>
                      </button>
                    </div>
                  </dl>
                </div>
              </div>
              <Image
                src={'/portada.jpg'}
                alt="Portada"
                className="w-full ml-4 aspect-square max-w-none rounded-xl hover:-translate-x-1 hover:-translate-y-1 transition-transform object-cover object-center "
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </div>
      </section>

      {/* seccion para los productos recientes */}
      <section className="mx-auto flex flex-col items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[90vh] px-2 sm:px-8">
        <h1 className="text-4xl underline font-bold text-primary-500">
          Productos publicados recientemente
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-w-3 aspect-h-4 bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-w-3 aspect-h-4 bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-w-3 aspect-h-4 bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-w-3 aspect-h-4 bg-primary-200 rounded-xl"></div>{' '}
          </div>
        </div>
      </section>

      {/* seccion para los ultimos intercambios realizados */}
      <section className="mx-auto flex flex-col items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[80vh] py-8 px-2 sm:px-8">
        <h1 className="text-4xl underline font-bold text-primary-500">
          Ultimos intercambios realizados - TODO
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="w-1/2 sm:w-1/4 p-2">
            <div className="group relative rounded-xl h-96">
              <div className="absolute inset-0 rounded-xl border-2 border-separate border-black bg-secondary-800" />
              {/* usar esta idea para poner las dos cosas que se intercambiaron. Sin hover la primera y con hover la segunda (mobile con click indicado!) */}
              {/* idea 2: se puede dividir la tarjeta en dos y ponder de un lado un objeto y del otro el otro. Y que al hacer click en uno se expanda sobre el otro */}
              <div className="relative flex h-full transform items-start group-hover:items-end rounded-xl border-2 border-black bg-primary-400 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:top-0 group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    WORK ON THIS
                  </h2>
                  <IconExchange className="w-36 h-36 sm:w-44 sm:h-44" />
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Go around the world
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>

                  <p className="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mostrar las sucursales de la fedeteria */}
      <Sucursales />
    </>
  );
}
