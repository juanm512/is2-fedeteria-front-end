'use client';
import { IconUserCircle } from '@tabler/icons-react';
import { useNavStore } from '@/utils/stores/nav';

export default function Profile({ children }: { children: React.ReactNode }) {
  const { menuOpen, changeMenuOpen, closeMenuOpen } = useNavStore();
  return (
    <div
      data-state={menuOpen === 'PROFILE' ? 'expanded' : 'collapsed'}
      className="group relative"
    >
      <button
        onClick={() =>
          menuOpen === 'PROFILE' ? closeMenuOpen() : changeMenuOpen('PROFILE')
        }
        type="button"
        className="relative rounded-md p-1 flex text-text-300 hover:text-text-100 group-data-[state=expanded]:outline-none group-data-[state=expanded]:ring-2 group-data-[state=expanded]:ring-white hover:bg-gradient-to-tl group-data-[state=expanded]:text-text-50 group-data-[state=expanded]:bg-gradient-to-tl to-accent-400 from-secondary-800 transition-transform duration-150 hover:-translate-y-0.5"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <IconUserCircle />
      </button>

      {children}
    </div>
  );
}
