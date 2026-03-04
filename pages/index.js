import Link from 'next/link';
import useSWR from 'swr'
import { homePageLinks } from '../public/staticText';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const fetcher = url => fetch(url).then(r => r.json());

const HomePageLink = ({ linkObject }) => {
  const { data, error } = useSWR('/api/hello', fetcher);
  console.log('data: ', data);
  const { link, text, target, ariaLabel } = linkObject;
  return (
    <Link href={link} target={target && target} aria-label={ariaLabel} rel='noreferrer' className={styles.blogLink}>
      {text}
    </Link>
  )
}
export default function Home() {
  return (
    <div className={styles.home_container}>
      <p className={styles.main_header}>Hi, I'm Anthony! <span className={styles.hand_wave}>👋</span></p>
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa} />.</p>
      <p>I used to work in the wonderful world of public accounting. One day, I tried writing code to <HomePageLink linkObject={homePageLinks.automate} /> and I discovered the immense potential for technology to change the financial industry. I've since become obsessed with the intersection of finance and technology.</p>
      <p>Currently, I work on building fintech stuff at <HomePageLink linkObject={homePageLinks.employer} /> and I previously worked at <HomePageLink linkObject={homePageLinks.past_employer} />.</p>
      <p>This website is where I <HomePageLink linkObject={homePageLinks.writings} /> and try to figure out how to make the world a better place.</p>
    </div>
  );
}
