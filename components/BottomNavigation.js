import bottomNavigationStyles from '../styles/BottomNavigation.module.css';

const BottomNavigation = () => {
  return (
    <nav className={bottomNavigationStyles.bottom_navigation_container}>
      <a className={bottomNavigationStyles.navigation_button}>
        <span className={bottomNavigationStyles.navigation_text_color}>« PREV</span>
        <br />
        <span>Title </span>
      </a>
      <a className={`${bottomNavigationStyles.navigation_button} ${bottomNavigationStyles.next}`}>
        <span className={bottomNavigationStyles.navigation_text_color}>NEXT »</span>
        <br />
        <span>Title </span>
        </a>
    </nav>
  )
}

export default BottomNavigation;