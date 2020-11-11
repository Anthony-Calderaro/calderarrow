import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
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
