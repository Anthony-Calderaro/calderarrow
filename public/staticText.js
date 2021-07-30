import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faPencilAlt, faMoon, faHome } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export function createFontAwesomeIcon(icon) {
  return <FontAwesomeIcon className='icon' icon={icon} />
}

export const themeIcons = {
  light: faMoon,
}

export const footerIcons = [
  {
    icon: faFile,
    link: 'https://gist.github.com/Anthony-Calderaro/6c41f8429a9dd395bf59362037c34d99',
    target: '_blank'
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/calderarrow',
    target: '_blank'
  },
  {
    icon: faHome,
    link: '/',
    // target: ''
  },
  {
    icon: faPencilAlt,
    link: '/writings',
  },
  {
    icon: faRss,
    link: '/rss.xml',
  },
];

export const headerLinks = ['writings', 'projects', 'contact'];

export const homePageLinks = {
  software: {
    link: 'https://github.com/Anthony-Calderaro',
    text: 'software developer',
    target: '_blank',
  },
  dlvfr: {
    link: 'https://www.dlvfrd.org/',
    text: 'volunteer',
    // text: 'volunteer EMT',
    target: '_blank',
  },
  automate: {
    link: '/writings/automate',
    text: 'automate my job',
  },
  cpa: {
    link: 'https://cpaportal.boa.virginia.gov/Verification/',
    text: 'Certified Public Accountant.',
    target: '_blank',
  },
  employer: {
    link: 'https://www.capitalone.com/',
    text: 'Capital One.',
    target: '_blank',
  },
  ymmv: {
    link: 'https://en.wiktionary.org/wiki/your_mileage_may_vary#English',
    text: 'YMMV',
    target: '_blank',
  },
  writings: {
    link: '/writings',
    text: `write about things `
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