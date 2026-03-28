# The repository that powers [calderarrow.me](calderarrow.me)

## Get Started
`npm install`
`npm start`
Check "engines" in package.json for most-up-to-date requirements.

## Tech Stack

- [Node 22](https://nodejs.org/en)
- [Next](https://nextjs.org/)
- [CSS modules](https://github.com/css-modules/css-modules)

## Deployments
Deployments happen automatically as new commits are pushed into the [production branch](https://github.com/Anthony-Calderaro/calderarrow#) of the repo (which is publicly available). 

That branch automatically runs `npm run build` before deployments, which will rebuild new pages and update the rss feed. If deploying from another branch, ensure to run it manually, first.

## Some Todos:

- [Redesign](https://adityatelange.github.io/hugo-PaperMod/archives/) the cards for each blog post
- Add Word counts to them as well
- work on the toc, tag, bottom nav in [title.js]
- Better UX on quotes (and consistent ems or dashes)
- SASS or globals for CSS variables
- Implement a better search device. Maybe SOLR?
- Check accessibilty of hyperlink colors
- Experiemnt with screen readers/keyboard navigation exclusively
