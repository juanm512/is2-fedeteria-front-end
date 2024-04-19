import { create } from 'zustand';

type NavStore = {
  menuOpen: string;
  pathname: string;
  filtersMenuMobileOpen: boolean;
  changeMenuOpen: (menu: string) => void;
  closeMenuOpen: () => void;
  changePathname: (text: string) => void;

  toggleFiltersMenuMobileOpen: () => void;
};

export const useNavStore = create<NavStore>((set) => ({
  menuOpen: '',
  pathname: '',
  filtersMenuMobileOpen: false,

  changeMenuOpen: (menu) => set(() => ({ menuOpen: menu })),
  closeMenuOpen: () => set(() => ({ menuOpen: '' })),
  changePathname: (text) => set(() => ({ pathname: text })),

  toggleFiltersMenuMobileOpen: () =>
    set((state) => ({ filtersMenuMobileOpen: !state.filtersMenuMobileOpen }))
}));
