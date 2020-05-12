const { v4: uuid } = require('uuid');

const bookmarks = [
  { id: uuid(),
    title: 'Pinterest',
    url: 'https://www.pinterest.com',
    description: 'Discover recipes, home ideas, style inspiration and other ideas to try.',
    rating: 5 },
  { id: uuid(),
    title: 'W3C Markup Validation Service',
    url: 'https://validator.w3.org/',
    description: 'Check the markup (HTML, XHTML, …) of Web documents',
    rating: 4 },
  { id: uuid(),
    title: 'Scrimba',
    url: 'https://scrimba.com/',
    description: 'Learn to code with interactive tutorials',
    rating: 5 },
]

module.exports = { bookmarks }