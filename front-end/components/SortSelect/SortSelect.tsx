import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { MenuItem } from '../Menu/MenuItem';

export default function SortSelect() {
    const [sortOption, setSortOption] = useState<string>('Popular');

    const toggleTheme = (event: any, name: string) => {
        event.preventDefault();
        setSortOption(name);
    };

    return (
        <Menu selectedOption={sortOption}>
            <MenuItem name='Popular' prop='light' handleClick={toggleTheme} />
            <MenuItem name='Recent' prop='flat-dark' handleClick={toggleTheme} />
            <MenuItem name='A - Z' prop='dark' handleClick={toggleTheme} />
        </Menu>
    );
}
