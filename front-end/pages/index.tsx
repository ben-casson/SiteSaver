import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';

export default function Home() {
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
            </main>
        </Layout>
    );
}
