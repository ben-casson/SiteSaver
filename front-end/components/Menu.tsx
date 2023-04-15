import { Dispatch, SetStateAction } from 'react';
import styles from './Menu.module.scss';
import { MenuItem } from './MenuItem';
import { MenuButton } from './MenuButton';
import useComponentVisible from '@/hooks/useComponentVisible';

type Props = {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
};

export function Menu({ currentTheme, setCurrentTheme }: Props) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(
        false,
        toggleMenu
    );

    function toggleMenu(event: any) {
        setIsComponentVisible(!isComponentVisible);
        let isExpanded = event.target.getAttribute('aria-expanded') === 'true';
        event.target.setAttribute('aria-expanded', !isExpanded);
        event.target.setAttribute('data-menu-is-open', !isExpanded);
    }

    return (
        <>
            <div id={styles.container} ref={ref}>
                <MenuButton
                    toggleMenu={toggleMenu}
                    menuIsOpen={isComponentVisible}
                    currentTheme={currentTheme}
                />
                {isComponentVisible && (
                    <div className={styles.menuItems} id='menu-items' role='menu' tabIndex={0}>
                        <MenuItem
                            name='Light'
                            theme='light'
                            setCurrentTheme={setCurrentTheme}
                        />
                        <MenuItem
                            name='Dark'
                            theme='dark'
                            setCurrentTheme={setCurrentTheme}
                        />
                        <MenuItem
                            name='Flat Dark'
                            theme='flat-dark'
                            setCurrentTheme={setCurrentTheme}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
