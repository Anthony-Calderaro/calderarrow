import Link from 'next/link';

import { homePageLinks } from '../public/staticText';

import styles from '../styles/Home.module.css';

const HomePageLink = ({ linkObject }) => {
  const { link, text, target, ariaLabel } = linkObject;
  return (
    <Link href={link}>
      <a target={target && target} ariaLabel={ariaLabel} rel='noreferrer' className={styles.blogLink}>
        {text}
      </a>
    </Link>
  )
}
export default function Home() {
  return (
    <div className={styles.home_container}>
      <p className={styles.main_header}>Hi, I'm Anthony! <span className={styles.hand_wave}>👋</span></p>
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa} />.</p>
      <p>I used to work in the wonderful world of public accounting. One day, I tried writing software to <HomePageLink linkObject={homePageLinks.automate} /> and I've been obsessed with software ever since.</p>
      <p>Currently, I work on building financial technology at <HomePageLink linkObject={homePageLinks.employer} />.</p>
      <p>This website is where I <HomePageLink linkObject={homePageLinks.writings} /> and try to figure out how to make the world a better place.&#8482;</p>
      {/* <p>Thanks for stopping by. Since you're here, consider this an open invitation to email me at <span ref={emailRef} /></p> */}
    </div>
  );
}
