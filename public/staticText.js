import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faPencilAlt, faHome, faAdjust, faMusic } from '@fortawesome/free-solid-svg-icons'
// import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function createFontAwesomeIcon(icon, optionalClass = '') {
  return <FontAwesomeIcon className={`icon ${optionalClass}`} icon={icon} />
}

export const themeIcons = {
  light: faAdjust,
}

export const footerIcons = [
  {
    icon: faPencilAlt,
    link: '/writings',
    ariaLabel: 'writings'
  },
  {
    icon: faMusic,
    link: '/music',
    ariaLabel: 'music'
  },
  // {
  //   icon: faFile,
  //   link: '/writings/resume',
  //   ariaLabel: 'resume'
  // },
  {
    icon: faHome,
    link: '/',
    ariaLabel: 'home'
    // target: ''
  },
  {
    icon: faGithub,
    link: 'https://github.com/Anthony-Calderaro',
    target: '_blank',
    ariaLabel: 'GitHub'
  },
  {
    icon: faRss,
    link: '/rss.xml',
    target: '_blank',
    ariaLabel: 'rss',
    target: '#'
  },
];

export const headerLinks = ['writings', 'projects', 'contact'];

export const homePageLinks = {
  cpa: {
    link: 'https://cpaportal.boa.virginia.gov/Verification/',
    text: 'certified public accountant',
    target: '_blank',
    ariaLabel: "Virginia CPA lookup"
  },
  dlvfr: {
    link: 'https://www.dlvfrd.org/',
    text: 'volunteer Fire Fighter',
    target: '_blank',
    ariaLabel: "Dunn Loring Volunteer Fire and Rescue Department"
  },
  automate: {
    link: '/writings/fintech',
    text: 'automate my job',
    ariaLabel: "automate my job"
  },
  software: {
    link: 'https://github.com/Anthony-Calderaro',
    text: 'software engineer',
    target: '_blank',
    ariaLabel: "Anthony Calderaro's Github"
  },
  employer: {
    link: 'https://www.capitalone.com/',
    text: 'Capital One',
    target: '_blank',
    ariaLabel: "Link to Current Employer"
  },
  ymmv: {
    link: 'https://en.wiktionary.org/wiki/your_mileage_may_vary#English',
    text: 'your mileage may vary',
    target: '_blank',
    ariaLabel: "Your Mileage May Vary"
  },
  writings: {
    link: '/writings',
    text: `talk to myself`,
    ariaLabel: "writings"
  },
};

export const quotes = [
  {
    quote: 'Failing at investing is like failing in relationships. It’s more a matter of character than intelligence.',
    source: 'The Intelligent Investor Introduction',
    link: 'wikipedia intelligent investor'
  },
  {
    quote: 'Blessed is he who expects nothing, for he shall enjoy everything.',
    source: 'The Intelligent Investor Introduction',
    link: 'wikipedia intelligent investor'
  },
  {
    quote: 'Kierkegard said life can be understood backward but must be lived forwards',
    source: '',
    link: ''
  },
];