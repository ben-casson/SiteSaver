import styles from '@/styles/Settings.module.scss';
import Head from 'next/head';
import Layout from '@/components/layout/layout';
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import Header from '@/components/Header/Header';

export default function Settings() {
    return (
        <Layout>
            <Head>
                <title>SiteSaver</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <h1 className={styles.heading}>Settings</h1>
            <ThemeSelector />
        </Layout>
    );
}
