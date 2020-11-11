import Head from 'next/head'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

import Header from '../components/Header';

const AboutMe = () => {
  return (
    <div>
      <h1>I'm Anthony! 👋</h1>
      <p>Calderarrow is something of a phoenitic pronounciation for my last name: Calderaro.</p>
      <p>I'm an developer with a background in financial accounting. I like building fintech products.</p>
      <p>I studied accounting at The George Washington University in Washington, DC.</p>
      <p>I spent several years working in public accounting as both an auditor and tax accountant.</p>
      <p>I am an avid middle-distance runner. You can check out my most recent PRs <Link href='/writings/running-records'><a className={styles.blogLink}>here.</a></Link></p>
      <p>I'm a wishful fan of the University of Notre Dame. Most of this site is styled according to their <Link href='https://onmessage.nd.edu/university-branding/colors/'><a className={styles.blogLink}>official colors.</a></Link></p>
      <p>This is my personal website where you can read things I've written, check out projects I've worked on, and get in touch with me.</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Calderaro</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>" />
      </Head>
      <Header />
      <main className={styles.main}>
        <AboutMe />
      </main>
    </div>
  )
}
