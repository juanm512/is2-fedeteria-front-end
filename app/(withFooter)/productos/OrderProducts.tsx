'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useOptimistic, useState, useTransition } from 'react';

import { setURLParams } from '@/lib/utils';

export default function OrderProducts({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let order = searchParams.orderBy || '';

  let router = useRouter();
  let [pending, startTransition] = useTransition();
  let [optimisticOrder, setOptimisticOrder] = useOptimistic(order);

  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={
            'group px-3 py-2 rounded-md inline-flex justify-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200' +
            (menuActive && ' bg-gray-300 text-gray-200')
          }
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setMenuActive((prev) => !prev)}
        >
          Sort
          <svg
            className={
              '-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition-transform duration-100' +
              (menuActive && ' rotate-180')
            }
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {menuActive && (
          <motion.div
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.1, ease: 'easeOut' }
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.075, ease: 'easeIn' }
            }}
          >
            <div className="py-1" role="none">
              <button
                className={
                  'block w-full px-4 py-2 text-sm' +
                  (optimisticOrder !== ''
                    ? ' text-gray-500 hover:bg-gray-200'
                    : ' font-medium text-gray-900 bg-gray-300')
                }
                role="menuitem"
                tabIndex={-1}
                id="menu-item-no-order"
                onClick={() => {
                  setMenuActive((prev) => !prev);

                  let params = setURLParams(searchParams);
                  // console.log(params.toString());
                  if (params.has('orderBy')) params.delete('orderBy');
                  // console.log(params.toString());

                  startTransition(() => {
                    setOptimisticOrder('');
                    if (params.size == 0) router.push(`?`);
                    else router.push(`?${params}`);
                  });
                }}
              >
                Sin orden
              </button>
              {Object.entries(orderBy).map(([key, value]) => (
                <button
                  key={key}
                  className={
                    'block w-full px-4 py-2 text-sm' +
                    (optimisticOrder !== key
                      ? ' text-gray-500 hover:bg-gray-200'
                      : ' font-medium text-gray-900 bg-gray-300')
                  }
                  role="menuitem"
                  tabIndex={-1}
                  id={'menu-item-' + key}
                  onClick={() => {
                    setMenuActive((prev) => !prev);

                    let params = setURLParams(searchParams);
                    params.set('orderBy', key);

                    startTransition(() => {
                      setOptimisticOrder(key);

                      router.push(`?${params}`);
                    });
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const orderBy = {
  ultimos_agregados: 'Ultimos agregados',
  mas_populares: 'Más populares',
  menor_precio: 'Menor precio',
  mayor_precio: 'Mayor precio'
};
