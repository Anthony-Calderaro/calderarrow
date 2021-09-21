import Link from 'next/link';
import Image from 'next/image'

import { themeIcons, createFontAwesomeIcon } from '../public/staticText';

import headerStyles from '../styles/Header.module.css';

const Header = ({ toggleTheme }) => {

  return (
    <div className={headerStyles.headerContainer}>

      <div className={headerStyles.linkContainer}>
        <Link href='/'>
          <a ariaLabel='self portrait' className={headerStyles.headshot}>
            <Image src='/hs.png' alt='A Picture of Me!' height={48} width={48} />
          </a>
        </Link>
      </div>

      <div className={headerStyles.iconContainer} tabIndex='0' onKeyPress={toggleTheme} onClick={toggleTheme}>{createFontAwesomeIcon(themeIcons.light)}</div>

    </div>
  );
};

export default Header;