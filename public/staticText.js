export const essayCategories = ['money', 'athletics', 'life', 'family', 'reflection', 'how-to'];

export const homePageLinks = {
  software: {
    link: 'https://github.com/Anthony-Calderaro',
    text: 'software developer'
  },
  dlvfr: {
    link: 'https://www.dlvfrd.org/',
    text: 'volunteer EMT'
  },
  cpa: {
    link: 'https://cpaportal.boa.virginia.gov/Verification/',
    text: 'Certified Public Accountant.'
  },
  employer: {
    link: 'https://www.ustaxcourt.gov/',
    text: 'the U.S. Tax Court.'
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

