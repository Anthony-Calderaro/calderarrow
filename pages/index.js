import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Hi, I'm Anthony! 👋</h1>
      <p>Calderarrow is sort of a phoenitic pronounciation for my last name: Calderaro.</p>
      <p>I'm a software developer and Certified Public Accountant <Link href='https://cpaportal.boa.virginia.gov/Verification/'><a className={styles.blogLink}>(License #50534)</a></Link>. </p>
      <p>I'm obsessed with fintech and working on <Link href='https://bankrank.io'><a className={styles.blogLink}>bankrank.io</a></Link> in my spare time.</p>
      <p>I'm an avid middle-distance runner. You can check out my most recent times <Link href='/writings/run-log'><a className={styles.blogLink}>here.</a></Link></p>
      <p>I'm a lifetime fan of the University of Notre Dame. Most of this site is styled according to their <Link href='https://onmessage.nd.edu/university-branding/colors/'><a className={styles.blogLink}>official colors.</a></Link></p>
      <p>This is my personal website where you can read things I've written, check out projects I've worked on, and get in touch with me.</p>

      {/* <div>
        <p>I'm currently working on</p>

      </div> */}
    </div>
  );
}
