import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import { themeIcons, createFontAwesomeIcon } from '../public/staticText';

import headerStyles from '../styles/Header.module.css';

// Todo Static
const links = ['writings', 'projects', 'quotes', 'contact'];

const LinkCategory = ({ category, active }) => <Link href={`/${category}`}><a className={`${headerStyles.link} ${active && headerStyles.active}`}>{category}</a></Link>;

const Header = ({ theme, toggleTheme }) => {
  const { pathname } = useRouter();

  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.linkContainer}>
        <Link href='/'>
          <a className={headerStyles.headshot}>
            <Image src='/hs.png' alt='A Picture of Me!' height={48} width={48} />
          </a>
        </Link>
      </div>
      <div className={headerStyles.linkContainer}>
        {links.map((category, i) => <LinkCategory active={pathname.includes(category)} category={category} key={i} />)}
      </div>

      <div className={headerStyles.iconContainer} onClick={toggleTheme}>
        {theme ? <span className={headerStyles.moon}>{createFontAwesomeIcon(themeIcons.light)}</span> : <span>☀️</span>}
      </div>

    </div>
  );
};

export default Header;