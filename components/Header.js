import Link from 'next/link';
import Image from 'next/image'

import { themeIcons, createFontAwesomeIcon } from '../public/staticText';

import headerStyles from '../styles/Header.module.css';

const headerLinks = [
  {
    label: 'home',
    link: '/',
  },
  {
    label: 'writings',
    link: '/writings',
  },
  {
    label: 'contact',
    link: '/writings/contact',
  },
  {
    label: 'RSS',
    link: '/rss.xml',
  }
];

const HeaderLink = ({ headerDetails, lightTheme }) => {
  const { link, label } = headerDetails;
  return <Link href={link} className={`${headerStyles.header_navigation} ${lightTheme ? '' : headerStyles.dark}`}>{label}</Link>;
}

const Header = ({ toggleTheme, lightTheme }) => {

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      toggleTheme();
    }
  }

  return (
    <div className={headerStyles.headerContainer}>

      <div className={headerStyles.linkContainer}>
        {headerLinks.map((headerDetails, i) => <HeaderLink key={i} headerDetails={headerDetails} lightTheme={lightTheme} />)}
      </div>

      <div className={headerStyles.iconContainer} tabIndex='0' onKeyUp={(e) => handleKeyUp(e)} onClick={toggleTheme}>{createFontAwesomeIcon(themeIcons.light)}</div>

    </div>
  );
};

export default Header;