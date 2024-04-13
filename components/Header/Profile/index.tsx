'use client';
import { IconUserCircle } from '@tabler/icons-react';
import { useNavStore } from '@/lib/utils/stores/nav';

export default function Profile() {
  const { menuOpen, changeMenuOpen, closeMenuOpen } = useNavStore();
  return (
    <button
      onClick={() =>
        menuOpen === 'PROFILE' ? closeMenuOpen() : changeMenuOpen('PROFILE')
      }
      type="button"
      className={
        'relative rounded-full p-1 flex transition-all duration-200 overflow-hidden border ' +
        (menuOpen === 'PROFILE'
          ? 'outline-none ring-0 ring-white text-text-800 bg-accent-300/70 border-transparent'
          : 'text-text-300 hover:text-text-100 border-secondary-500')
      }
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <IconUserCircle />
    </button>
  );
}
