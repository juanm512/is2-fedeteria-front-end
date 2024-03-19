'use client';
import {
  IconUserCircle,
  IconEditCircle,
  IconLogout2
} from '@tabler/icons-react';

import Link from 'next/link';
import { useState } from 'react';

export default function Profile({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      data-state={menuOpen ? 'expanded' : 'collapsed'}
      className="group relative"
    >
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        type="button"
        className="relative rounded-md p-1 flex text-text-300 hover:text-text-100 focus:outline-none focus:ring-2 focus:ring-white focus:bg-accent-600 focus:text-text-50 transition-transform duration-150 hover:-translate-y-0.5"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <IconUserCircle />
      </button>

      {/*<!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
      {children}
    </div>
  );
}
