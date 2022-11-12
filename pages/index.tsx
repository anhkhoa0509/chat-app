import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Chat app</title>
				<meta name='description'  />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Sidebar />
		</div>
	)
}

export default Home
