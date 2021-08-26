import Link from 'next/link';
import Image from 'next/image'

import headerStyles from '../styles/Header.module.css';

const Header = ({ theme, toggleTheme }) => {

  const sunOrMoonIcon = theme ? <span className='icon'>🔆</span> : <span className='icon'>🌙</span>;

  return (
    <div className={headerStyles.headerContainer}>

      <div className={headerStyles.linkContainer}>
        <Link href='/'>
          <a className={headerStyles.headshot}>
            <Image src='/hs.png' alt='A Picture of Me!' height={48} width={48} />
          </a>
        </Link>
      </div>

      <div className={headerStyles.iconContainer} tabIndex='0' onKeyPress={toggleTheme} onClick={toggleTheme}>{sunOrMoonIcon}</div>

    </div>
  );
};

export default Header;