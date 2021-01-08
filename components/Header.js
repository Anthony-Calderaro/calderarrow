import Link from 'next/link';

// Todo: may not need lgiht
import headerStyles from '../styles/Header.module.css';

// Todo Static
const links = ['writings', 'projects', 'quotes', 'TIL', 'contact'];

const LinkCategory = ({ category }) => <Link href={`/${category}`}><a className={headerStyles.link}>{category}</a></Link>;

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.linkContainer}>
      <Link href='/'>
        <a className={headerStyles.link}>Home</a> 
        {/* Todo: headshot */}
      </Link>
      </div>
      <div className={headerStyles.linkContainer}>
        {links.map((category, i) => <LinkCategory category={category} key={i} />)}
      </div>
      
      <div className={headerStyles.iconContainer} onClick={toggleTheme}>
          {theme ? <span>🌑</span> : <span>🌕</span>}
      </div>
    
    </div>
  );
};

export default Header;