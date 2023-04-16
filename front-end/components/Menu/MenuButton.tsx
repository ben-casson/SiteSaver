import styles from './MenuButton.module.scss';
import { MouseEventHandler } from 'react';

type Props = {
    label: string;
    menuIsOpen: boolean;
    toggleMenu: MouseEventHandler<HTMLButtonElement>;
    selectedOption: string;
};

export function MenuButton({ label, menuIsOpen, toggleMenu, selectedOption }: Props) {
    return (
        <div className={styles.menuButtonContainer}>
            <label htmlFor='menuButton'>{label}</label>
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
                {selectedOption}
            </button>
            <span className={styles.arrow + ' ' + (menuIsOpen ? styles.rotate : '')}></span>
        </div>
    );
}
