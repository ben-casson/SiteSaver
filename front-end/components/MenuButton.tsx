import { MouseEventHandler } from 'react';
import styles from './MenuButton.module.scss';

type Props = {
    menuIsOpen: boolean;
    toggleMenu: MouseEventHandler<HTMLButtonElement>;
    currentTheme: string;
};

export function MenuButton({ menuIsOpen, toggleMenu, currentTheme }: Props) {
    return (
        <div className={styles.menuButtonContainer}>
            <label htmlFor='menuButton'>Theme</label>
            <button
                name='menuButton'
                id='menuButton'
                onClick={(event) => toggleMenu(event)}
                className={styles.menuButton}
                aria-haspopup='true'
                aria-expanded={menuIsOpen}
                aria-controls='menu-items'
                data-menu-is-open={menuIsOpen}
            >
                {currentTheme}
            </button>
            <span className={styles.arrow + ' ' + (menuIsOpen ? styles.rotate : '')}></span>
        </div>
    );
}
