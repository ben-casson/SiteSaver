import { Menu } from '../Menu/Menu';
import { MenuItem } from '../Menu/MenuItem';
import useThemeStore from '@/lib/themeStore';

export default function ThemeSelector() {
    const theme = useThemeStore((state) => state.theme);

    const toggleTheme = (name: string, prop?: string) => {
        if (prop) document.body.className = prop;
        useThemeStore.setState({ theme: name });
    };

    return (
        <Menu selectedOption={theme} label='Theme'>
            <MenuItem name='Light' prop='light' handleClick={toggleTheme} />
            <MenuItem name='Dark' prop='dark' handleClick={toggleTheme} />
            <MenuItem name='Flat Dark' prop='flat-dark' handleClick={toggleTheme} />
        </Menu>
    );
}
