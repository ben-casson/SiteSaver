import styles from './Header.module.scss';
import Image from 'next/image';
import darkModeIcon from '../../public/bookmark-dark-mode.png';
import lightModeIcon from '../../public/bookmark-light-mode.png';
import useThemeStore from '@/lib/themeStore';
import NavMenuItem from './NavMenuItem';
import MobileNavMenu from './MobileNavMenu';

export default function Header() {
    const theme = useThemeStore((state) => state.theme);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <div className={styles.iconContainer}>
                        <p className={styles.iconText}>S</p>
                        <Image
                            src={theme === 'Light' ? lightModeIcon : darkModeIcon}
                            alt='bookmark icon'
                            className={styles.icon}
                            width={60}
                            height={60}
                            priority
                        />
                    </div>
                    <p className={styles.logoText}>iteSaver</p>
                </div>
                <ul className={styles.navMenuItems}>
                    <NavMenuItem text='Bookmarks' path='/' />
                    <NavMenuItem text='Settings' path='/settings' />
                </ul>
                <MobileNavMenu />
            </div>
        </header>
    );
}
