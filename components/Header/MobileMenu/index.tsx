'use client';

import { IconMenu, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function MobileMenu({
  children
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div data-state={menuOpen ? 'expanded' : 'collapsed'} className="group">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button -->*/}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-text-300 hover:text-text-100 focus:outline-none focus:ring-2 focus:ring-white focus:bg-accent-600 focus:text-text-50"
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
