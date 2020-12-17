import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>I'm Anthony! 👋</h1>
      <p>Calderarrow is sort of a phoenitic pronounciation for my last name: Calderaro.</p>
      <p>I'm an developer with a background in financial accounting (CPA). I'm obsessed with fintech.</p>
      <p>I am an avid middle-distance runner. You can check out my most recent PRs <Link href='/writings/run-log'><a className={styles.blogLink}>here.</a></Link></p>
      <p>I'm a lifetime fan of the University of Notre Dame. Most of this site is styled according to their <Link href='https://onmessage.nd.edu/university-branding/colors/'><a className={styles.blogLink}>official colors.</a></Link></p>
      <p>This is my personal website where you can read things I've written, check out projects I've worked on, and get in touch with me.</p>

      {/* <div>
        <p>I'm currently working on</p>

      </div> */}
    </div>
  );
}
