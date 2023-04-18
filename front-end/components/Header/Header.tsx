import styles from './Header.module.scss';
import Image from 'next/image';
import darkModeIcon from '../../public/bookmark-dark-mode.png';
import lightModeIcon from '../../public/bookmark-light-mode.png';
import useThemeStore from '@/lib/themeStore';

export default function Header() {
    const theme = useThemeStore((state) => state.theme);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image
                    src={theme === 'Light' ? lightModeIcon : darkModeIcon}
                    alt='bookmark icon'
                    className={styles.logo}
                    width={60}
                    height={60}
                />
            </div>
        </header>
    );
}
