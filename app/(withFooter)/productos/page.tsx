// import { Suspense } from 'react';
import { LoaderIcon } from 'lucide-react';

import FiltersPanel from './FiltersPanel';
import FilterButtonMobile from './FilterButtonMobile';
import OrderProducts from './OrderProducts';
import Link from 'next/link';
import Image from 'next/image';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="group w-full">
      <div>
        <main className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-400 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Productos publicados
            </h1>

            <div className="flex items-center gap-4">
              <FilterButtonMobile />
              <OrderProducts searchParams={searchParams} />
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="relative grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* <!-- Filters --> */}
              <FiltersPanel searchParams={searchParams} />

              {/* <!-- Product grid --> */}
              {/* <Suspense fallback={<Loading />}> */}
              <ProductsList searchParams={searchParams} />
              {/* </Suspense> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

async function ProductsList({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // ACA SE HACE EL FETCH PASANDO LOS SEARCHPARAMS QUE ESTEN PUESTOS (LOS FILTROS)

  let productos = await filtarProductos(products, searchParams);

  // await Promise.all([new Promise((resolve) => setTimeout(resolve, 500))]);

  return (
    <div className="lg:col-span-3">
      <div className="mx-auto max-w-2xl px-2 py-16 sm:px-3 sm:py-24 lg:max-w-7xl lg:px-4">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {/*  */}
          {productos.map((product: any) => (
            <Link
              key={product.id}
              href={'/productos/' + product.id}
              className="group/product"
            >
              <div className="relative aspect-h-3 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-9 xl:aspect-w-7">
                <Image
                  src={product.imageUrl}
                  fill
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full rounded-xl object-cover object-center group-hover/product:opacity-75"
                />
                <div className="absolute inset-0 flex flex-col-reverse">
                  <div className="relative w-full h-11 p-2 bg-accent-300/90 backdrop-blur-md rounded-t-xl transition-all duration-300 delay-75 ease-in group-hover/product:h-24 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <h3 className="text-base font-medium text-gray-700 leading-7">
                        {product.title}
                      </h3>
                      <p className="flex-shrink-0 text-xl font-medium text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                    <div className="opacity-0 translate-y-full flex justify-start items-center gap-4 transition-all will-change-transform duration-300 delay-150 ease-out group-hover/product:translate-y-0 group-hover/product:opacity-100 ">
                      <p className="flex-shrink-0 text-sm text-gray-900">
                        Vendido por
                      </p>
                      <h3 className="text-base text-gray-900">Felipee</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="grow h-full flex items-center justify-center">
      <LoaderIcon className="size-6 animate-spin" />
    </div>
  );
}

interface product {}
const products = [
  {
    id: 'dasvud-412841-fsdivs',
    title: 'Hormigonera',
    description: '',
    price: 140,
    state: 'bastante_gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'capital_federal'
    },
    categoryTags: ['Construccion'],
    createdAt: new Date(),
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1674927125657-e8782933d009?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    promoted: false
  },
  {
    id: '2v343876mn',
    title: 'Torno',
    description: '',
    price: 90,
    state: 'gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'la_plata'
    },
    categoryTags: ['Metales'],
    createdAt: new Date(),
    imageUrl:
      'https://images.unsplash.com/photo-1515630771457-09367d0ae038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    promoted: false
  },
  {
    id: 'nb3459m96',
    title: 'Motosierra',
    description: '',
    price: 75,
    state: 'poco_uso',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'la_plata'
    },
    categoryTags: [''],
    createdAt: new Date(),
    imageUrl:
      'https://images.unsplash.com/photo-1613410341838-03185ad82422?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    promoted: false
  },
  {
    id: 'nmp4328',
    title: 'Taladro Atornillador Percutor',
    description: '',
    price: 23,
    state: 'casi_nuevo',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'chivilcoy'
    },
    categoryTags: ['Todo'],
    createdAt: new Date(),
    imageUrl:
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    promoted: false
  },
  {
    id: 'poytuj654',
    title: 'Martillo',
    description: '',
    price: 5,
    state: 'bastante_gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'chivilcoy'
    },
    categoryTags: ['Todo'],
    createdAt: new Date(),
    imageUrl:
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    promoted: false
  },
  {
    id: 'dsdivs',
    title: 'Torno para madera',
    description: '',
    price: 15,
    state: 'gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'bahia_blanca'
    },
    categoryTags: ['Carpinteria'],
    createdAt: new Date(),
    imageUrl:
      'https://images.pexels.com/photos/6790945/pexels-photo-6790945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    promoted: false
  },
  {
    id: '412841-fsdivs',
    title: 'Sierra electrica',
    description: '',
    price: 47,
    state: 'gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'dolores'
    },
    categoryTags: ['Construccion', 'Carpinteria'],
    createdAt: new Date(),
    imageUrl:
      'https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    promoted: false
  },
  {
    id: '1234gfdsg',
    title: 'Moladora',
    description: '',
    price: 55,
    state: 'gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'chivilcoy'
    },
    categoryTags: ['Construccion'],
    createdAt: new Date(),
    imageUrl:
      'https://images.unsplash.com/photo-1674117068854-9dcc8a16dba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    promoted: false
  },
  {
    id: 'dads8372vs',
    title: 'Lijadora electrica',
    description: '',
    price: 50,
    state: 'gastado',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'bahia_blanca'
    },
    categoryTags: ['Carpinteria'],
    createdAt: new Date(),
    imageUrl:
      'https://images.pexels.com/photos/6004890/pexels-photo-6004890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    promoted: false
  },
  {
    id: 'dvfas7621i',
    title: 'Sierra circular',
    description: '',
    price: 350,
    state: 'nuevo',
    owner: {
      name: 'Pedro Gonzalez',
      rating: 3,
      sucursal: 'chivilcoy'
    },
    categoryTags: ['Construccion', 'Carpinteria'],
    createdAt: new Date(),
    imageUrl:
      'https://images.unsplash.com/photo-1559295759-389f1c534a1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    promoted: false
  }
];

const filtarProductos = async (
  products: any,
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
) => {
  let filters: string[][] = [];
  Object.entries(searchParams).forEach((entrie) => {
    if (entrie[1] !== undefined) {
      typeof entrie[1] !== 'string'
        ? entrie[1].forEach((value) => filters.push([entrie[0], value]))
        : filters.push([entrie[0], entrie[1]]);
    }
  });

  if (!filters) {
    return products;
  }
  return products;

  // let filteredProducts: any[] = [];
  // for (let i = 0; i < products.length; i++) {
  //   const producto: any = products[i];

  //   if (!
  // }
};
