'use client';

import { useNavStore } from '@/utils/stores/nav';
import { IconMenu, IconX } from '@tabler/icons-react';

export default function MobileMenu({
  children
}: {
  children: React.ReactNode;
}) {
  const { menuOpen, changeMenuOpen, closeMenuOpen } = useNavStore();
  return (
    <div
      data-state={menuOpen === 'MOBILE' ? 'expanded' : 'collapsed'}
      className="group"
    >
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button -->*/}
        <button
          onClick={() =>
            menuOpen === 'MOBILE' ? closeMenuOpen() : changeMenuOpen('MOBILE')
          }
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-text-300 hover:text-text-100 group-data-[state=expanded]:outline-none group-data-[state=expanded]:ring-2 group-data-[state=expanded]:ring-white hover:bg-gradient-to-tl group-data-[state=expanded]:text-text-50 group-data-[state=expanded]:bg-gradient-to-tl to-accent-400 from-secondary-800"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/*<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            --> */}
          {!menuOpen ? <IconMenu /> : <IconX />}
        </button>
      </div>
      {children}
    </div>
  );
}
