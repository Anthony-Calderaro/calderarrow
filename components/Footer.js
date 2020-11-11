import footerStyles from '../styles/Home.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        calderarrow &copy; {currentYear}
      </a>
    </footer>
  );
};

export default Footer;