import styles from './MenuItem.module.scss';
import { Dispatch, SetStateAction } from 'react';

type MenuItemProps = {
    name: string;
    theme?: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
};

export function MenuItem({ name, theme, setCurrentTheme }: MenuItemProps) {
    const toggleTheme = (event: any) => {
        const dataTheme = event.target.getAttribute('data-theme');
        document.body.className = dataTheme;
        setCurrentTheme(name);
    };

    return (
        <div className={styles.menuItemContainer} role='menuitem' tabIndex={-1}>
            <button className={styles.themeButton} onClick={toggleTheme} data-theme={theme}>
                {name}
            </button>
        </div>
    );
}
