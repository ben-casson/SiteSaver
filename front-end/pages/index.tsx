import styles from '@/styles/home.module.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/layout';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import useThemeStore from '@/lib/themeStore';

export default function Home() {
    useEffect(() => {
        if (document.body.className === '') {
            let userPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
            document.body.className = userPrefersDark ? 'dark' : 'light';
            userPrefersDark
                ? useThemeStore.setState({ theme: 'Dark' })
                : useThemeStore.setState({ theme: 'Light' });
        }
    });

    return (
        <Layout>
            <Head>
                <title>SiteSaver</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <h1 className={styles.heading}>Home</h1>
            <Main />
        </Layout>
    );
}
