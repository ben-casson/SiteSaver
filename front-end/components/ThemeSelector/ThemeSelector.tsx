import { Dispatch, SetStateAction } from 'react';
import { Menu } from '../Menu/Menu';
import { MenuItem } from '../Menu/MenuItem';

type Props = {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
};

export default function ThemeSelector({ currentTheme, setCurrentTheme }: Props) {
    const toggleTheme = (name: string, prop: string) => {
        document.body.className = prop;
        setCurrentTheme(name);
    };

    return (
        <Menu label='Theme' selectedOption={currentTheme}>
            <MenuItem name='Light' prop='light' handleClick={toggleTheme} />
            <MenuItem name='Dark' prop='dark' handleClick={toggleTheme} />
            <MenuItem name='Flat Dark' prop='flat-dark' handleClick={toggleTheme} />
        </Menu>
    );
}
