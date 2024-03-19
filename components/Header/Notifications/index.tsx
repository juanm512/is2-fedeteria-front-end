'use client';
import { IconBell } from '@tabler/icons-react';
import { useState } from 'react';

export default function Notifications({
  children
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      data-state={menuOpen ? 'expanded' : 'collapsed'}
      className="group relative"
    >
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        type="button"
        aria-controls="notifications-menu"
        aria-expanded="false"
        className="relative rounded-md p-1 text-text-300 hover:text-text-100 focus:outline-none focus:ring-2 focus:ring-white focus:bg-accent-600 focus:text-text-50 transition-transform duration-150 hover:-translate-y-0.5"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <IconBell />
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
