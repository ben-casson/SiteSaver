import styles from './Main.module.scss';
import { Dispatch, SetStateAction } from 'react';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

type Props = {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
};

export default function Main({ currentTheme, setCurrentTheme }: Props) {
    return (
        <main className={styles.main}>
            <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </main>
    );
}
