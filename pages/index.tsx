import type { NextPage } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <script src="https://upload-widget.cloudinary.com/2.3.43/global/all.js" defer />
                <title>Chat app</title>
                <meta name='description' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Sidebar />
        </div>
    )
}

export default Home
