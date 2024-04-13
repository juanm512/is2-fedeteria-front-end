'use client';

import { useNavStore } from '@/lib/utils/stores/nav';
import { IconMenu, IconX } from '@tabler/icons-react';

export default function MobileMenuButton() {
  const { menuOpen, closeMenuOpen, changeMenuOpen } = useNavStore();
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      {/* <!-- Mobile menu button -->*/}
      <button
        onClick={() =>
          menuOpen === 'MOBILE' ? closeMenuOpen() : changeMenuOpen('MOBILE')
        }
        type="button"
        className={
          'relative inline-flex items-center justify-center rounded-full p-2 ' +
          (menuOpen === 'MOBILE'
            ? 'outline-none ring-0 ring-white text-text-800 bg-secondary-500/50'
            : 'text-text-300 ')
        }
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        {menuOpen === 'MOBILE' ? <IconX /> : <IconMenu />}
      </button>
    </div>
  );
}
