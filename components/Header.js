import Link from 'next/link';
import Image from 'next/image'

import { themeIcons, createFontAwesomeIcon } from '../public/staticText';

import headerStyles from '../styles/Header.module.css';

const Header = ({ toggleTheme }) => {

  return (
    <div className={headerStyles.headerContainer}>

      <div className={headerStyles.linkContainer}>
        <Link href='/' className={headerStyles.header_navigation}>Home</Link>
        <Link href='/writings' className={headerStyles.header_navigation}>Writings</Link>
        <Link href='/writings/contact' className={headerStyles.header_navigation}>Contact</Link>
        <Link href='/rss.xml' className={headerStyles.header_navigation}>RSS</Link>
      </div>

      <div className={headerStyles.iconContainer} tabIndex='0' onKeyDown={toggleTheme} onClick={toggleTheme}>{createFontAwesomeIcon(themeIcons.light)}</div>

    </div>
  );
};

export default Header;