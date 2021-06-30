const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

(async function createRSSFeed() {
  const fileNames = fs.readdirSync('./posts')
  const writings = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join('./posts', fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });

  writings.sort((a, b) => a.date < b.date ? 1 : -1);

  const xmlString = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  
  <channel>
    <title>Writings by Anthony Calderaro</title>
    <link>https://calderarrow.me/rss.xml</link>
    <description>An RSS feed of all my writings.</description>
    ${writings.map(({ title, id }) => {
      return `
        <item>
          <title>${title}</title>
          <link>${`https://calderarrow.me/writings/${id}`}</link>
          <guid isPermaLink="false">${id}</guid>
        </item>
      `;
    }).join('')}
    <atom:link href="https://calderarrow.me/rss.xml" rel="self" type="application/rss+xml" />
  </channel>
  
  </rss>
  `;
 
  fs.writeFileSync('public/rss.xml', xmlString);
})();
