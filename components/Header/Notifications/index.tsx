'use client';
import { IconBell } from '@tabler/icons-react';
import { useNavStore } from '@/lib/utils/stores/nav';

export default function Notifications() {
  const { menuOpen, changeMenuOpen, closeMenuOpen } = useNavStore();
  return (
    <button
      onClick={() =>
        menuOpen === 'NOTIFICATIONS'
          ? closeMenuOpen()
          : changeMenuOpen('NOTIFICATIONS')
      }
      type="button"
      className={
        'relative rounded-full p-1 flex transition-all duration-200 overflow-hidden border ' +
        (menuOpen === 'NOTIFICATIONS'
          ? 'outline-none ring-0 ring-white text-text-800 bg-primary-300/70 border-transparent'
          : 'text-text-300 hover:text-text-100 border-secondary-500/50')
      }
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">View notifications</span>
      <IconBell />
    </button>
  );
}
