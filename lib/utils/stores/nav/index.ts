import { create } from 'zustand';

type NavStore = {
  menuOpen: string;
  pathname: string;
  changeMenuOpen: (menu: string) => void;
  closeMenuOpen: () => void;
  changePathname: (text: string) => void;
};

export const useNavStore = create<NavStore>((set) => ({
  menuOpen: '',
  pathname: '',
  changeMenuOpen: (menu) => set(() => ({ menuOpen: menu })),
  closeMenuOpen: () => set(() => ({ menuOpen: '' })),
  changePathname: (text) => set(() => ({ pathname: text }))
}));
