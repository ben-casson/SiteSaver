import styles from '../styles/settings.module.scss';
import Head from 'next/head';
import Layout from '@/components/layout/layout';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

export default function AddBookmark() {
    return (
        <Layout>
            <Head>
                <title>Add Bookmark</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header heading='Add Bookmark' />
            <Main>
                <h2 className={styles.heading}>Add Bookmark</h2>
            </Main>
            
        </Layout>
    );
}
