import Head from 'next/head';
import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Home() {
    const [currentTheme, setCurrentTheme] = useState('');

    useEffect(() => {
        let userPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        if (userPrefersDark) {
            document.body.className = 'dark';
            setCurrentTheme('Dark');
        } else {
            document.body.className = 'light';
            setCurrentTheme('Light');
        }
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
