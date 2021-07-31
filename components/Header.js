import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import headerStyles from '../styles/Header.module.css';

const LinkCategory = ({ category, active }) => <Link href={`/${category}`}><a className={`${headerStyles.link} ${active && headerStyles.active}`}>{category}</a></Link>;

const Header = ({ theme, toggleTheme }) => {
  const { pathname } = useRouter();
  const sunOrMoonIcon = theme ? <span className='icon'>🔆</span> : <span className='icon'>🌙</span>;


  return (
    <div className={headerStyles.headerContainer}>

      <div className={headerStyles.linkContainer}>
        <Link href='/'>
          <a className={headerStyles.headshot}>
            <Image src='/hs.png' alt='A Picture of Me!' height={48} width={48} />
            {!pathname.includes('/writings') && <span className={headerStyles.main_header}>Hi, I'm Anthony! 👋</span>}
          </a>
        </Link>
      </div>


      {/* <div className={headerStyles.linkContainer}>
        {headerLinks.map((category, i) => <LinkCategory active={pathname.includes(category)} category={category} key={i} />)}
      </div> */}

      <div className={headerStyles.iconContainer} tabIndex='0' onKeyPress={toggleTheme} onClick={toggleTheme}>{sunOrMoonIcon}</div>

    </div>
  );
};

export default Header;