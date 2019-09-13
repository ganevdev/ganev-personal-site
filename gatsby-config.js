module.exports = {
  siteMetadata: {
    siteTitle: 'Ivan Ganev',
    siteDescription: 'Ivan Ganev Personal Site',
    siteImage: '/banner.png', // main image of the site for meta tags
    siteUrl: 'https://ganev.ru', // example - http://example.com
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Ivan Ganev', // for example - 'Ivan Ganev'
    twitter: '@ganevru' // for twitter cards meta data, example - '@ganevru'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: '↓ show more ↓',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        }
      }
    }
  ]
};
