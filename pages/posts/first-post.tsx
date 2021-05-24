import { Image, Layout } from '../../components'
import Link from 'next/link';
import Head from 'next/head';

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <Image src={'/images/profile.jpeg'} />
            <br />
            <Link href='/'><a>{`< Back`}</a></Link>
        </Layout>
    )
}

export default FirstPost