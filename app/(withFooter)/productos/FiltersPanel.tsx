'use client';

import { useTransition } from 'react';
import FilterSucursales from './FilterSucursales';
import { SidebarClose } from 'lucide-react';
import { useNavStore } from '@/lib/utils/stores/nav';

export default function FiltersPanel({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { filtersMenuMobileOpen, toggleFiltersMenuMobileOpen } = useNavStore();
  let [pending, startTransition] = useTransition();

  return (
    // <div data-pending={pending ? '' : undefined} className="hidden lg:block">
    <div
      data-pending={pending ? '' : undefined}
      className={
        'absolute z-10 w-[75vw] top-0 block transition-all duration-200 lg:z-0 lg:w-auto lg:left-0 lg:relative lg:translate-x-0' +
        (filtersMenuMobileOpen ? ' -left-0' : ' -left-full')
      }
    >
      <div className="relative flex h-full w-full max-w-sm flex-col py-4 pb-32 lg:pb-12 px-8 bg-secondary-200/50 backdrop-blur rounded-lg border border-gray-400 lg:border-0 lg:border-r lg:ml-auto lg:bg-transparent lg:rounded-none">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 lg:border-b-0">
          <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
          <button
            type="button"
            className="-mr-2 flex h-10 px-2 py-1 w-fit items-center justify-center gap-1 rounded-md font-medium bg-gray-100/70 p-2 text-gray-700 lg:hidden"
            onClick={toggleFiltersMenuMobileOpen}
          >
            <span className="sr-only">Close menu</span>
            <SidebarClose />
            Cerrar
          </button>
        </div>
        <FilterSucursales
          startTransition={startTransition}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
