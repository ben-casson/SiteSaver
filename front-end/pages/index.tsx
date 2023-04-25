import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/layout';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import useThemeStore from '@/lib/themeStore';
import Tags from '@/components/Tags/Tags';
import SortSelect from '@/components/SortSelect/SortSelect';
import AddBookmarkButton from '@/components/AddBookmarkButton/AddBookmarkButton';

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
            <Header heading='Bookmarks' />
            <Main>
                <div className={styles.container}>
                    <section className={styles.bookmarksSection}>
                        <h2 className={styles.heading}>Bookmarks</h2>
                        <div className={styles.inputsContainer}>
                            <div className={styles.infoIcon}>i</div>
                            <input
                                className={styles.bookmarkSearch}
                                type='search'
                                name='bookmarkSearch'
                                id='bookmarkSearch'
                            />
                            <SortSelect />
                            <div className={styles.sortDirection}>&darr;</div>
                            <AddBookmarkButton />
                        </div>
                    </section>
                    <aside className={styles.tagsContainer}>
                        <Tags></Tags>
                    </aside>
                </div>
            </Main>
        </Layout>
    );
}
