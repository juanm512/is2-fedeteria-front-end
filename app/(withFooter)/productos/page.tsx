// import { Suspense } from 'react';
import { LoaderIcon } from 'lucide-react';

import FiltersPanel from './FiltersPanel';
import FilterButtonMobile from './FilterButtonMobile';
import OrderProducts from './OrderProducts';

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
              <OrderProducts />
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
  let moviesPromise;
  // Artificial delay

  // let [movies] = await Promise.all([
  //   new Promise((resolve) => setTimeout(resolve, 1000))
  // ]);

  return (
    <div className="lg:col-span-3">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group/product">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-full w-full object-cover object-center group-hover/product:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
          </a>
          <a href="#" className="group/product">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                className="h-full w-full object-cover object-center group-hover/product:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
          <a href="#" className="group/product">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                alt="Person using a pen to cross a task off a productivity paper card."
                className="h-full w-full object-cover object-center group-hover/product:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>
          <a href="#" className="group/product">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="h-full w-full object-cover object-center group-hover/product:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Machined Mechanical Pencil
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>

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
