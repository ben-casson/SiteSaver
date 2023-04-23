import styles from './NavMenuItem.module.scss';
import Link from 'next/link';

type Props = {
    text: string;
    path: string;
    handleClick?: any;
}

export default function NavMenuItem({ text, path, handleClick }: Props) {
    return (
        <li className={styles.navMenuItem}>
            <button onClick={handleClick}>
                <Link href={path} className={styles.link}>
                    {text}
                </Link>
            </button>
        </li>
    );
}
