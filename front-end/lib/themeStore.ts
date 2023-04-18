import { create } from 'zustand';

type ThemeStore = {
    theme: string;
};

const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'Dark',
}));

export default useThemeStore;
