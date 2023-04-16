import styles from './Menu.module.scss';
import { MenuButton } from './MenuButton';
import useComponentVisible from '@/hooks/useComponentVisible';

type Props = {
    children: any;
    label: string;
    selectedOption: string;
};

export function Menu({ children, label, selectedOption }: Props) {
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
                    label={label}
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
        </>
    );
}
