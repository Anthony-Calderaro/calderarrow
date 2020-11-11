import Head from 'next/head'
import writingStyles from '../styles/Writing.module.css'

import Header from '../components/Header';

export default function Writing() {
  return (
    <div className={writingStyles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={writingStyles.main}>

      </main>

      <footer className={writingStyles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          calderarrow &copy; 2020
        </a>
      </footer>
    </div>
  )
}
