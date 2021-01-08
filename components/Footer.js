import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faRss, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

import { faLinkedinIn, faSpotify, faTwitter, faGithub,  } from '@fortawesome/free-brands-svg-icons' 

// Todo: Refactor all the module styles
import footerStyles from '../styles/Footer.module.css';

const icons = [
  { icon: faFile,
    link: 'https://gist.github.com/Anthony-Calderaro/6c41f8429a9dd395bf59362037c34d99',
    target: '_blank'
  }, 
  { icon: faMusic,
    link: '/writings/music',
  }, 
  { icon: faTwitter,
    link: 'https://twitter.com/calderarrow',
    target: '_blank'
  }, 
  { icon: faGithub,
    link: 'https://github.com/Anthony-Calderaro',
    target: '_blank'
  }, 
  { icon: faRss,
    link: '/rss',
  }, 
];

const IconLink = ({ iconDetails }) => {
  const { icon, link, target } = iconDetails;
  return (
    <Link href={`${link}`}>
      <a target={target && target} rel='noreferrer'>
        <FontAwesomeIcon icon={icon} /> 
      </a>
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.icon_menu}>
        {icons.map(iconDetails => <IconLink iconDetails={iconDetails} />)}
        
      </div>
    </footer>
  );
};

export default Footer;