'use client';
import { IconBell } from '@tabler/icons-react';
import { useNavStore } from '@/utils/stores/nav';

export default function Notifications({
  children
}: {
  children: React.ReactNode;
}) {
  const { menuOpen, changeMenuOpen, closeMenuOpen } = useNavStore();
  return (
    <div
      data-state={menuOpen === 'NOTIFICATIONS' ? 'expanded' : 'collapsed'}
      className="group relative"
    >
      <button
        onClick={() =>
          menuOpen === 'NOTIFICATIONS'
            ? closeMenuOpen()
            : changeMenuOpen('NOTIFICATIONS')
        }
        type="button"
        aria-controls="notifications-menu"
        aria-expanded="false"
        className="relative rounded-md p-1 flex text-text-300 hover:text-text-100 group-data-[state=expanded]:outline-none group-data-[state=expanded]:ring-2 group-data-[state=expanded]:ring-white hover:bg-gradient-to-tl group-data-[state=expanded]:text-text-50 group-data-[state=expanded]:bg-gradient-to-tl to-accent-400 from-secondary-800 transition-transform duration-150 hover:-translate-y-0.5"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <IconBell />
      </button>

      {children}
    </div>
  );
}
