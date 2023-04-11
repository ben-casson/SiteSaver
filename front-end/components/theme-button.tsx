import { useEffect, useState } from 'react';
import styles from './theme-button.module.scss';

export function ThemeButton({}) {
    // let userPrefersDark: boolean = true;
    // useEffect(() => {
    //     userPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        
    // },[])
    // const preferredColorScheme = userPrefersDark ? 'dark' : 'light';

    const [theme, setTheme] = useState<Theme>('dark');

    function onClick() {
        const newTheme = (document.body.className === 'dark') ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.className = newTheme;
    }

    return (
        <div>
            <button onClick={onClick} className={styles.themeButton}>{theme}</button>
        </div>
    );
}
