import Link from 'next/link';

import { homePageLinks } from '../public/staticText';

import styles from '../styles/Home.module.css';

const HomePageLink = ({ linkObject }) => {
  const { link, text, target } = linkObject;
  return (
    <Link href={link}>
      <a target={target && target} className={styles.blogLink}>
        {text}
      </a>
    </Link>
  )
}
export default function Home() {

  return (
    <div className={styles.home_container}>
      <p className={styles.main_header}>Hi, I'm Anthony! 👋</p>
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa}/></p>
      <p>I'm passionate about financial technology and currently work as a software engineer at <HomePageLink linkObject={homePageLinks.employer} /></p>
      <p>This is my public page where I post <HomePageLink linkObject={homePageLinks.writings} />, <HomePageLink linkObject={homePageLinks.projects} />, and things <HomePageLink linkObject={homePageLinks.quotes} /> that I find interesting.</p>
      <p>The things I say here are my own. Read at your own risk, <HomePageLink linkObject={homePageLinks.ymmv} />, et cetera, et cetera.</p>

    </div>
  );
}
