import Link from 'next/link';
import Image from 'next/image'

import { themeIcons, createFontAwesomeIcon } from '../public/staticText';

import headerStyles from '../styles/Header.module.css';

const Header = ({ toggleTheme }) => {

  return (
    <div className={headerStyles.headerContainer}>

      <div className={headerStyles.linkContainer}>
        <Link href='/'><a className={headerStyles.header_navigation}>Home</a></Link>
        <Link href='/writings'><a className={headerStyles.header_navigation}>Writings</a></Link>
        <Link href='/writings/contact'><a className={headerStyles.header_navigation}>Contact</a></Link>
        <Link href='/rss.xml'><a className={headerStyles.header_navigation}>RSS</a></Link>
      </div>

      <div className={headerStyles.iconContainer} tabIndex='0' onKeyPress={toggleTheme} onClick={toggleTheme}>{createFontAwesomeIcon(themeIcons.light)}</div>

    </div>
  );
};

export default Header;