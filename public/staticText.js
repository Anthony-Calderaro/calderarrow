import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faRss, faRunning } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export function createFontAwesomeIcon(icon) {
  return <FontAwesomeIcon icon={icon} />
}

export const races = [
  {
    'date': 'Dec 2020',
    'distance': '1600m',
    'time': '6:13.64',
    'trend': 'Slower',
    'location': 'Danville, CA',
    'notes': ''
  },
  {
    'date': 'Apr 2014',
    'distance': '400m',
    'time': '56.74',
    'trend': '-',
    'location': 'Danville, CA',
    'notes': 'HS Varsity Track Meet'
  },
  {
    'date': 'Feb 2014',
    'distance': '800m',
    'time': '2:12.15',
    'trend': '-',
    'location': 'Livermore, CA',
    'notes': 'HS Varsity Track Meet'
  },
  {
    'date': 'Nov 2014',
    'distance': '1600m',
    'time': '5:35.26',
    'trend': '-',
    'location': 'Danville, CA',
    'notes': 'HS 24 Hour Marathon'
  }
];

export const footerIcons = [
  {
    icon: faRunning,
    link: '/writings/run-log',
  },
  {
    icon: faFile,
    link: 'https://gist.github.com/Anthony-Calderaro/6c41f8429a9dd395bf59362037c34d99',
    target: '_blank'
  },
  {
    icon: faMusic,
    link: '/writings/music',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/calderarrow',
    target: '_blank'
  },
  {
    icon: faGithub,
    link: 'https://github.com/Anthony-Calderaro',
    target: '_blank'
  },
  {
    icon: faRss,
    link: '/rss',
  },
];

export const essayCategories = ['money', 'athletics', 'life', 'family', 'reflection'];

export const homePageLinks = {
  software: {
    link: 'https://github.com/Anthony-Calderaro',
    text: 'software developer',
    target: '_blank',
  },
  dlvfr: {
    link: 'https://www.dlvfrd.org/',
    text: 'volunteer EMT',
    target: '_blank',
  },
  cpa: {
    link: 'https://cpaportal.boa.virginia.gov/Verification/',
    text: 'Certified Public Accountant.',
    target: '_blank',
  },
  employer: {
    link: 'https://www.ustaxcourt.gov/',
    text: 'the U.S. Tax Court.',
    target: '_blank',
  },
  running: {
    link: '/writings/run-log',
    text: 'here.'
  },
  writings: {
    link: '/writings',
    text: `things I've written`
  },
  projects: {
    link: '/projects',
    text: 'things I built'
  },
  contact: {
    link: '/contact',
    text: 'connect'
  },
};

export const essays = [
  {
    title: 'Run Log',
    url: 'run-log',
    date: 'December 2020',
    categories: ['athletics'],
    summary: 'Charts & logs visualizing my Personal Records in the 400m, 800m, 1600m, 5k, and 10k events. Timestamped and dated for posterity.',
    paragraphs: [],
    misc: {
      '400': [
        // {
        //   date: 'December 2020',
        //   minutes: 6,
        //   seconds: 13,
        //   miliseconds: 78
        // },
      ],
      '800': [
        // {
        //   date: 'December 2020',
        //   minutes: 6,
        //   seconds: 13,
        //   miliseconds: 78
        // },
      ],
      '1600': [
        {
          date: 'December 2020',
          minutes: 6,
          seconds: 13,
          miliseconds: 78
        },
      ],
      '5000': [],
      '10000': [],
    }
  },
  {
    title: 'Essay 2',
    date: 'January 2021',
    categories: ['money', 'reflection'],
    summary: 'Here is a TL;DR that could fit in 240 characters',
    paragraphs: [
      'Some text for paragraph 1',
      'Some text for paragraph 2',
      'Some text for paragraph 3',
      'Some text for paragraph 4',
    ]
  },
  {
    title: 'Esssay 3',
    date: 'January 2021',
    categories: ['money', 'life'],
    summary: 'Here is a TL;DR that could fit in 240 characters',
    paragraphs: [
      'Some text for paragraph 1',
      'Some text for paragraph 2',
      'Some text for paragraph 3',
      'Some text for paragraph 4',
    ]
  },
]

