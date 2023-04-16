import styles from './Header.module.scss';
import Image from 'next/image';
import darkModeIcon from '../../public/bookmark-dark-mode.png';
import lightModeIcon from '../../public/bookmark-light-mode.png';

type Props = {
    currentTheme: string;
};

export default function Header({ currentTheme }: Props) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image
                    src={currentTheme === 'Light' ? lightModeIcon : darkModeIcon}
                    alt='bookmark icon'
                    className={styles.logo}
                    width={60}
                    height={60}
                    priority
                />
            </div>
        </header>
    );
}
