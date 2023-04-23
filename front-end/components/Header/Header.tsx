import styles from './Header.module.scss';
import Image from 'next/image';
import darkModeIcon from '../../public/bookmark-dark-mode.png';
import lightModeIcon from '../../public/bookmark-light-mode.png';
import useThemeStore from '@/lib/themeStore';
import useComponentVisible from '@/hooks/useComponentVisible';
import MobileMenu from './MobileMenu';


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
                        />
                    </div>
                    <p className={styles.logoText}>iteSaver</p>
                </div>
                <MobileMenu />
            </div>
        </header>
    );
}
