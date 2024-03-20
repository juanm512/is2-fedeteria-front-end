import { IconArrowDown, IconBox } from '@tabler/icons-react';
import Image from 'next/image';

import Footer from '@/components/Footer';
import Sucursales from '@/components/Shared/Sucursales';
import FAQ from '@/components/Shared/FAQ';

export const metadata = {
  title: 'Fedeteria',
  description: 'Una web para hacer trueques.'
};

export default async function IndexPage() {
  return (
    <>
      {/* hero de toda la vida */}
      <section className="mx-auto flex flex-col sm:flex-row items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[95vh] py-8 px-2 sm:px-8">
        <div className="w-full sm:w-8/12 lg:w-6/12 h-fit flex flex-col justify-evenly items-start px-2 sm:px-8 gap-8">
          <h1 className="text-7xl font-bold text-primary-500">
            Bienvenido a la web de la Fedeteria!
          </h1>
          <h2 className="text-2xl text-secondary-700">
            Aca vas a poder utilizar nuestro servicio de trueques! No dudes en
            ofrecer tus productos que no necesites para intercambiar con losd e
            otros usuarios. Tambien podes buscar entre miles de productos y
            encontrar lo que necesitas!{' '}
          </h2>
          <div className="w-full flex justify-start items-center gap-4">
            <button className="bg-primary-500 rounded-lg font-medium text-lg px-4 py-2 flex items-center gap-2 w-1/2 justify-center sm:w-fit">
              Ver productos <IconArrowDown />{' '}
            </button>
            <button className="bg-secondary-700 rounded-lg text-primary-500 font-medium text-lg px-4 py-2 flex items-center gap-2 w-1/2 justify-center sm:w-fit">
              Publicar! <IconBox />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-4/12 h-fit">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 translate-y-2 translate-x-2 bg-accent-500 rounded-xl" />
            <Image
              fill
              alt="poratada"
              className="object-cover object-center rounded-xl"
              src={'/portada.jpg'}
            />
          </div>
        </div>
      </section>

      {/* seccion para algunas stats de la pagina */}
      <section className="mx-auto flex flex-col sm:flex-row items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[50vh] py-8 px-2 sm:px-8">
        <div className="w-full sm:w-1/3 aspect-video bg-primary-200 rounded-xl"></div>
        <div className="w-full sm:w-1/3 aspect-video bg-primary-200 rounded-xl"></div>
        <div className="w-full sm:w-1/3 aspect-video bg-primary-200 rounded-xl"></div>
      </section>

      {/* seccion para los productos recientes */}
      <section className="mx-auto flex flex-col items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[95vh] py-8 px-2 sm:px-8">
        <h1 className="text-4xl underline font-bold text-primary-500">
          Productos publicados recientemente
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
        </div>
      </section>

      {/* seccion para los ultimos intercambios realizados */}
      <section className="mx-auto flex flex-col items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[95vh] py-8 px-2 sm:px-8">
        <h1 className="text-4xl underline font-bold text-primary-500">
          Ultimos intercambios realizados
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            {' '}
            <div className="aspect-square bg-primary-200 rounded-xl"></div>{' '}
          </div>
        </div>
      </section>

      {/* seccion para valoraciones de los clientes */}
      <section className="mx-auto flex flex-col items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[50vh] py-8 px-2 sm:px-8">
        <h1 className="text-4xl underline font-bold text-primary-500">
          Comentarios de nuestros clientes
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="w-full sm:w-1/3 p-2">
            {' '}
            <div className="aspect-video bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-full sm:w-1/3 p-2">
            {' '}
            <div className="aspect-video bg-primary-200 rounded-xl"></div>{' '}
          </div>
          <div className="w-full sm:w-1/3 p-2">
            {' '}
            <div className="aspect-video bg-primary-200 rounded-xl"></div>{' '}
          </div>
        </div>
      </section>

      {/* boton cta a las preguntas frecuentes */}
      <FAQ />

      {/* mostrar las sucursales de la fedeteria */}
      <Sucursales />
    </>
  );
}
