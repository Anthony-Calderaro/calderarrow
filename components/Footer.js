import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faRss } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faSpotify, faTwitter, faGithub,  } from '@fortawesome/free-brands-svg-icons' 

import footerStyles from '../styles/Footer.module.css';
// Todo: Refactor all the module styles

const Footer = () => {
  // Todo: make all links and a tags use target and rel
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '600px'}}>
        {/* Todo: Add spotify
        https://developer.spotify.com/console/get-users-currently-playing-track/?market=US&additional_types=
         */}
      </div>
      <div className={footerStyles.icon_menu}>
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faMusic} /> 
        <FontAwesomeIcon icon={faTwitter} /> 
        <FontAwesomeIcon icon={faGithub} /> 
        <FontAwesomeIcon icon={faRss} /> 
        {/* Top tracks post w/ Profile */}
      </div>
      {/* Currently playing 
    // New line
    Twitter icon
    Github icon
    Linkedin
    RSS icon
    */}
    </footer>
  );
};

export default Footer;