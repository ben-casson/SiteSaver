import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Tags from "@/components/Tags/Tags";
import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function TagsPage() {
    return (
        <Layout>
            <Head>
                <title>Tags</title>
                <meta name='description' content='A better way to bookmark' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header heading='Tags' />
            <Main>
                <Tags />
            </Main>
        </Layout>
    )
}