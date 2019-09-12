module.exports = {
  siteMetadata: {
    siteTitle: 'Ivan Ganev',
    siteDescription: 'Ivan Ganev Personal Site',
    siteUrl: 'http://localhost:8000', // example - http://example.com
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
