import { useState } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as Dark } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as Light } from '@fortawesome/free-regular-svg-icons'

import headerStyles from '../styles/Header.module.css';

// Todo Static
const links = ['writings', 'projects', 'quotes', 'TIL', 'contact'];

const LinkCategory = ({ category }) => <Link href={`/${category}`}><a className={headerStyles.link}>{category}</a></Link>;

const Header = () => {
  const [lightTheme, toggleTheme] = useState(true);
/*Dark  Todo: Text color: 156,163,175 
light: 156,163,175*/
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
      
      <div className={headerStyles.iconContainer} onClick={() => toggleTheme(!lightTheme)}>
          <FontAwesomeIcon icon={lightTheme ? Light : Dark} />
      </div>
    
    </div>
  );
};

export default Header;