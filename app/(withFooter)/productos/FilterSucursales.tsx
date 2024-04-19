'use client';

import { useRouter } from 'next/navigation';
import { useOptimistic } from 'react';

export default function FilterSucursales({
  sucursalesSP,
  startTransition
}: {
  sucursalesSP: string[];
  startTransition: any;
}) {
  let router = useRouter();

  let [optimisticSucursales, setOptimisticSucursales] =
    useOptimistic(sucursalesSP);

  return (
    <div className="px-4 py-6">
      <h3 className="-mx-2 -my-3 flow-root">
        {/* <!-- Expand/collapse section button --> */}
        <div className="flex w-full items-center justify-between px-2 py-3">
          <span className="font-medium text-gray-500 underline">
            Sucursales
          </span>
        </div>
      </h3>
      {/* <!-- Filter section, show/hide based on section state. --> */}
      <div className="pt-2" id="filter-section-mobile-0">
        <div className="space-y-2">
          {/*  */}
          {Object.entries(sucursales).map(([key, value]) => (
            <label
              htmlFor={'filter_sucursales' + key}
              className="relative flex min-w-[60%] w-fit gap-x-3 cursor-pointer"
            >
              <div className="relative flex h-6 items-center">
                <input
                  id={'filter_sucursales' + key}
                  name="sucursales"
                  type="checkbox"
                  onChange={() => {
                    let newSucursales = !optimisticSucursales.includes(key)
                      ? [...optimisticSucursales, key]
                      : optimisticSucursales.filter((g) => g !== key);

                    let newParams = new URLSearchParams(
                      newSucursales
                        .sort()
                        .map((sucursal) => ['sucursal', sucursal])
                    );

                    startTransition(() => {
                      setOptimisticSucursales(newSucursales.sort());

                      router.push(`?${newParams}`);
                    });
                  }}
                  checked={optimisticSucursales.includes(key)}
                  className="peer z-10 h-4 w-4 rounded border-gray-300 accent-primary-400 focus:ring-primary-600 cursor-pointer"
                />
                <div className="absolute h-4 w-4 rounded bg-secondary-800 transition-transform peer-checked:translate-y-0.5 peer-checked:translate-x-0.5" />
              </div>

              <p
                className={
                  'text-sm leading-6 font-medium select-none' +
                  (optimisticSucursales.includes(key)
                    ? ' text-primary-700'
                    : ' text-gray-700')
                }
              >
                {value}
              </p>
            </label>
          ))}
          {/*  */}
        </div>
      </div>
    </div>
  );
}

const sucursales = {
  capital_federal: 'Capital Federal',
  la_plata: 'La Plata',
  dolores: 'Dolores',
  chivilcoy: 'Chivilcoy',
  berazategui: 'Berazategui',
  bahia_blanca: 'Bahía Blanca'
};
