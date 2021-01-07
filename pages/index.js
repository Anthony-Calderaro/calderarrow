import Link from 'next/link';
import { homePageLinks } from '../public/staticText';

import styles from '../styles/Home.module.css';

const HomePageLink = ({ linkObject }) => {
  console.log(linkObject)
  const { link, text } = linkObject;
  return (
    <Link href={link}>
      <a target='#' className={styles.blogLink}>
        {text}
      </a>
    </Link>
  )
}
export default function Home() {
  console.log('homePageLinks', homePageLinks)
  return (
    <div className={styles.home_container}>
      <h1>Hi, I'm Anthony! 👋</h1>
      <p>Calderarrow is sort of a phoenitic pronounciation for my last name: Calderaro.</p>
      <p>I'm a <HomePageLink linkObject={homePageLinks.software} />, <HomePageLink linkObject={homePageLinks.dlvfr} />, and <HomePageLink linkObject={homePageLinks.cpa} /></p>
      <p>I'm interested in fintech and currently work as a developer for <HomePageLink linkObject={homePageLinks.employer} /></p>
      <p>I'm an avid middle-distance runner. You can check out my most recent times <HomePageLink linkObject={homePageLinks.running} /></p>
      <p>While you're here, you can read <HomePageLink linkObject={homePageLinks.writings} />, check out <HomePageLink linkObject={homePageLinks.projects} />, or <HomePageLink linkObject={homePageLinks.contact} /> with me.</p>
{/* 
  Todo: Timeline https://leerob.io/ 
    Currently playing 
    // New line
    Spotify Link to profile or top tracks music
    Twitter icon
    Github icon
    Linkedin
    RSS icon
    <FontAwesomeIcon icon={faLinkedinIn} />
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
*/}
      {/* <div>
        <p>I'm currently working on</p>

      </div> */}
    </div>
  );
}
