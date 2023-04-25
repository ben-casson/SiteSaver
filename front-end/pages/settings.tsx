import styles from '../styles/settings.module.scss';
import Head from 'next/head';
import Layout from '@/components/layout/layout';
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

export default function Settings() {
    return (
        <Layout>
            <Head>
                <title>Settings</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header heading='Settings' />
            <Main>
                <h2 className={styles.heading}>Settings</h2>
                <ThemeSelector />
            </Main>
            
        </Layout>
    );
}
