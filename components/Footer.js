import Link from 'next/link';

import { footerIcons, createFontAwesomeIcon } from '../public/staticText';

// Todo: Refactor all the module styles
import footerStyles from '../styles/Footer.module.css';

const IconLink = ({ iconDetails, lightTheme }) => {
  const { icon, link, target, ariaLabel } = iconDetails;
  return (
    <Link className={lightTheme ? '' : 'dark'} href={`${link}`} aria-label={ariaLabel} target={target && target} rel='noreferrer'>
      {createFontAwesomeIcon(icon)}
    </Link>
  )
}

const Footer = ({ lightTheme }) => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.icon_menu}>
        {footerIcons.map((iconDetails, i) => <IconLink key={i} iconDetails={iconDetails} lightTheme={lightTheme} />)}
      </div>
    </footer>
  );
};

export default Footer;