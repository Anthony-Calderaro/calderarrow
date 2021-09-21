import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faPencilAlt, faHome, faAdjust } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
    icon: faFile,
    link: 'https://gist.github.com/Anthony-Calderaro/6c41f8429a9dd395bf59362037c34d99',
    target: '_blank',
    ariaLabel: 'Github'
  },
  {
    icon: faHome,
    link: '/',
    ariaLabel: 'home'
    // target: ''
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/calderarrow',
    target: '_blank',
    ariaLabel: 'twitter'
  },
  {
    icon: faRss,
    link: '/rss.xml',
    ariaLabel: 'rss'
  },
];

export const headerLinks = ['writings', 'projects', 'contact'];

export const homePageLinks = {
  software: {
    link: 'https://github.com/Anthony-Calderaro',
    text: 'software developer',
    target: '_blank',
    ariaLabel: "Anthony Calderaro's Github"
  },
  dlvfr: {
    link: 'https://www.dlvfrd.org/',
    text: 'volunteer',
    // text: 'volunteer EMT',
    target: '_blank',
    ariaLabel: "Dunn Loring Volunteer Fire and Rescue Department"
  },
  automate: {
    link: '/writings/fintech',
    text: 'automate my job',
    ariaLabel: "automate my job"
  },
  cpa: {
    link: 'https://cpaportal.boa.virginia.gov/Verification/',
    text: 'Certified Public Accountant.',
    target: '_blank',
    ariaLabel: "Virginia CPA lookup"
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
    text: `think about things`,
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