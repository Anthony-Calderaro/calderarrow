import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faPencilAlt, faLightbulb, faHome, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function createFontAwesomeIcon(icon, optionalClass = '') {
  return <FontAwesomeIcon className={`icon ${optionalClass}`} style={{ width: icon === faRss && "16px" }} icon={icon} />
}

export const themeIcons = {
  dark: faLightbulb,
  light: faLightbulb,
}
export const emailAddress = 'anthonyj@gwu.edu';

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
    icon: faEnvelope,
    link: null,
    ariaLabel: 'copy email to clipboard'
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
    text: 'volunteer fire fighter',
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
    link: 'https://www.novacredit.com/',
    text: 'Nova Credit',
    target: '_blank',
    ariaLabel: "Link to Current Employer"
  },
  past_employer: {
    link: 'https://www.capitalone.com/',
    text: 'Capital One',
    target: '_blank',
    ariaLabel: "Link to Past Employer"
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

export const sortByMapping = {
  0: {
    key: "date",
    isAscending: true
  },
  1: {
    key: "date",
    isAscending: false
  },
  2: {
    key: "wordCount",
    isAscending: true
  },
  3: {
    key: "wordCount",
    isAscending: false
  },
}

export const postTags = [
  "family",
  "fintech",
  "fitness",
  "inspiration",
  "life",
  "review",
  "writing",
]

export const tagColors = {
  [postTags[0]]: "lightgreen",
  [postTags[1]]: "lightblue",
  [postTags[2]]: "lightcyan",
  [postTags[3]]: "lightcoral",
  [postTags[4]]: "lightgoldenrodyellow",
  [postTags[5]]: "lightsalmon",
  [postTags[6]]: "lightsteelblue",
}