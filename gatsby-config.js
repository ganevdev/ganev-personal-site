module.exports = {
  siteMetadata: {
    siteTitle: 'Ivan Ganev',
    siteDescription: 'Ivan Ganev Personal Site',
    siteImage: '/banner.png',
    siteUrl: 'https://www.ganevdev.com',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Ivan Ganev',
    twitterSite: '@ganevru',
    twitterCreator: '@ganevru'
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
