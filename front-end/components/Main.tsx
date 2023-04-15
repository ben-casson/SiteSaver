import styles from './Main.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { Menu } from './Menu';

type Props = {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
};

export default function Main({ currentTheme, setCurrentTheme }: Props) {
    return (
        <main className={styles.main}>
            <Menu currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </main>
    );
}
