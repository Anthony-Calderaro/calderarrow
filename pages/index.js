import Link from 'next/link';
// import { useRef, useEffect } from 'react';
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
  // const emailRef = useRef(null);
  // const writeEmail = () => {
  //   // For whoever reads this, I'm not sure if it actually protects against bots.
  //   // https://stackoverflow.com/questions/41318987/hide-email-address-from-bots-keep-mailto
  //   const email1 = 'hello@';
  //   const email2 = 'calderarrow.me';
  //   emailRef.current.innerHTML = `<a href="mailto:${email1}${email2}" style='color: blue'>${email1}${email2}</a>`;
  // }
  // useEffect(() => writeEmail(), [])
  return (
    <div className={styles.home_container}>
      <span className={styles.main_header}>Hi, I'm Anthony! <span className={styles.hand_wave}>👋</span></span>
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa} /></p>
      <p>I used to work in the wonderful world of public accounting. One day, I tried writing software to <HomePageLink linkObject={homePageLinks.automate} /> and I've been obsessed with technology ever since.</p>
      <p>Currently, I work on building financial technology at <HomePageLink linkObject={homePageLinks.employer} />.</p>
      <p>This website is where I <HomePageLink linkObject={homePageLinks.writings} /> and try to figure out how to make the world a better place.&#8482;</p>
      {/* <p>Thanks for stopping by. Since you're here, consider this an open invitation to email me at <span ref={emailRef} /></p> */}
    </div>
  );
}
