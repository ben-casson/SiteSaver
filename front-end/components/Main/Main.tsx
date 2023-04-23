import styles from './Main.module.scss';
// import ThemeSelector from '../ThemeSelector/ThemeSelector';

type Props = {
    children: any;
}

export default function Main({ children }: Props) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}
