import useComponentVisible, { setMenuAttributes } from '@/hooks/useComponentVisible';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';

export default function MobileMenu() {
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
        <div className={styles.mobileMenuContainer} ref={ref}>
            <button
                className={styles.hamburgerMenuButton}
                onClick={(event) => toggleMenu(event)}
                aria-haspopup='true'
                aria-expanded={isComponentVisible}
                aria-controls='menu-items'
                data-menu-is-open={isComponentVisible}
            >
                {!isComponentVisible ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        width='22'
                        height='22'
                    >
                        <path
                            fillRule='evenodd'
                            d='M5 6a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H6z'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        width='22'
                        height='22'
                    >
                        <path
                            fillRule='evenodd'
                            d='M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                )}
            </button>
            <div
                className={
                    styles.container + ' ' + (isComponentVisible ? styles.open : styles.closed)
                }
            >
                <ul>
                    <li>
                        <button onClick={() => setIsComponentVisible(false)}>
                            <Link href='/' className={styles.link}>
                                Home
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsComponentVisible(false)}>
                            <Link href='/settings' className={styles.link}>
                                Settings
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
