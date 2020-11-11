import Head from 'next/head'
import writingsStyles from '../styles/Writings.module.css'

import Header from '../components/Header';

export default function writings() {
  return (
    <div className={writingsStyles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={writingsStyles.main}>

      </main>
    </div>
  )
}
