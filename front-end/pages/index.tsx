import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/layout';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

export default function Home() {
    const [currentTheme, setCurrentTheme] = useState('');

    useEffect(() => {
        let userPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        document.body.className = userPrefersDark ? 'dark' : 'light';
        setCurrentTheme(userPrefersDark ? 'Dark' : 'Light');
    }, []);

    return (
        <Layout>
            <Head>
                <title>SiteSaver</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Main currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </Layout>
    );
}
