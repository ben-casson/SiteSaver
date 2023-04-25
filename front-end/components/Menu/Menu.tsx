import styles from './Menu.module.scss';
import { MenuButton } from './MenuButton';
import useComponentVisible, { setMenuAttributes } from '@/hooks/useComponentVisible';

type Props = {
    children: any;
    label?: string | null;
    selectedOption: string;
};

export function Menu({ children, label, selectedOption }: Props) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(
        false,
        toggleMenu
    );

    function toggleMenu(event: any) {
        event.preventDefault();
        setIsComponentVisible(!isComponentVisible);
        setMenuAttributes(event);
    }

    return (
            <div id={styles.container} ref={ref}>
                <MenuButton
                    label={label || ''}
                    toggleMenu={toggleMenu}
                    menuIsOpen={isComponentVisible}
                    selectedOption={selectedOption}
                />
                {isComponentVisible && (
                    <div className={styles.menuItems} id='menu-items' role='menu' tabIndex={0}>
                        {children}
                    </div>
                )}
            </div>
    );
}
