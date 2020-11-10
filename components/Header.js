import headerStyles from '../styles/Header.module.css';
import Link from 'next/link';

const links = ['Writing', 'Projects', 'Contact'];
const icons = ['Subscribe'];

const LinkCategory = ({ category, key }) => <Link href={`/${category}`}><a className={headerStyles.link} key={key}>{category}</a></Link>;

const Icon = ({ icon, key }) => {
  let iconImage = <div></div>;

  switch(icon) {
    case 'Subscribe':
      iconImage = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><circle cx="6.18" cy="17.82" r="2.18"/><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/></svg>;
      break;
    default:
      break;
  }
  return <div key={key} className={headerStyles.icon}>{iconImage}</div>
};

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.logo}>&#128587;</div>
      
      <div className={headerStyles.linkContainer}>
        {links.map((category, i) => <LinkCategory category={category} key={i} />)}
      </div>
      
      <div className={headerStyles.iconContainer}>
        {icons.map((icon, i) => <Icon icon={icon} key={i} />)}
      </div>
    
    </div>
  );
};

export default Header;