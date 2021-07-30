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
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa}/></p>
      <p>I used to work in the wonderful world of public accounting. I once tried writing software to <HomePageLink linkObject={homePageLinks.automate} /> and I've been obsessed with software development ever since.</p>
      <p>Currently, I work on building financial technology at <HomePageLink linkObject={homePageLinks.employer} /> in northern Virginia.</p>
      {/* <p>I'm passionate about financial technology and currently work as a software engineer at </p> */}
      <p>This is my public page where I <HomePageLink linkObject={homePageLinks.writings} /> and try to make the world a better place.&#8482;</p>
    </div>
  );
}
