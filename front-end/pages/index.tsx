import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Layout from '@/components/layout';
import { ThemeButton } from '@/components/theme-button';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        let userPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        userPrefersDark ? (document.body.className = 'dark') : (document.body.className = 'light');
        console.log(userPrefersDark)
    }, []);

    return (
        <Layout>
            <Head>
                <title>SiteSaver</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <p>hello</p>
                <ThemeButton />
            </main>
        </Layout>
    );
}
