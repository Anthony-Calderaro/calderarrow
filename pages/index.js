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
      <h1>Hi, I'm Anthony! 👋</h1>
      <p>Calderarrow is sort of a phoenitic pronounciation for my last name: Calderaro.</p>
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa} /></p>
      <p>I'm interested in fintech and currently work as a software engineer at <HomePageLink linkObject={homePageLinks.employer} /></p>
      <p>I'm an avid middle-distance runner. You can check out my most recent times <HomePageLink linkObject={homePageLinks.running} /></p>
      <p>Thanks for stopping by! Feel free to check out <HomePageLink linkObject={homePageLinks.writings} />, <HomePageLink linkObject={homePageLinks.projects} />, or <HomePageLink linkObject={homePageLinks.contact} /> with me.</p>

    </div>
  );
}
