import footerStyles from '../styles/Home.module.css';

const Footer = () => {
  // Todo: make all links and a tags use target and rel
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://calderarrow.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        calderarrow &copy; {currentYear}
      </a>
    </footer>
  );
};

export default Footer;