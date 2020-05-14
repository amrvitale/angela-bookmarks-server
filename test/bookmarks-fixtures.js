function makeBookmarksArray() {
    
    return [
      {
        id: 1,
        title: 'Pinterest',
        url: 'https://www.pinterest.com',
        description: 'Discover recipes, home ideas, style inspiration and other ideas to try.',
        rating: 5,
      },
      {
        id: 2,
        title:  'W3C Markup Validation Service',
        url: 'https://validator.w3.org/',
        description: 'Check the markup (HTML, XHTML, …) of Web documents',
        rating: 4,
      },
      {
        id: 3,
        title:  'Scrimba',
        url: 'https://scrimba.com/',
        description: 'Learn to code with interactive tutorials',
        rating: 5,
      },
    ]
  }
  
  module.exports = {
    makeBookmarksArray,
  }