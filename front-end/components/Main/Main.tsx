import styles from './Main.module.scss';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

export default function Main() {
    return (
        <main className={styles.main}>
            <ThemeSelector />
        </main>
    );
}
