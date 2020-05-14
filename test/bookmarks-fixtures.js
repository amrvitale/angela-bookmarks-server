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
  
  function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
  module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark,
  }