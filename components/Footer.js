import Link from 'next/link';

import { footerIcons, createFontAwesomeIcon } from '../public/staticText';

// Todo: Refactor all the module styles
import footerStyles from '../styles/Footer.module.css';

const IconLink = ({ iconDetails }) => {
  const { icon, link, target, ariaLabel } = iconDetails;
  return (
    <Link href={`${link}`} aria-label={ariaLabel} target={target && target} rel='noreferrer'>
      {createFontAwesomeIcon(icon)}
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.icon_menu}>
        {footerIcons.map((iconDetails, i) => <IconLink key={i} iconDetails={iconDetails} />)}
      </div>
    </footer>
  );
};

export default Footer;