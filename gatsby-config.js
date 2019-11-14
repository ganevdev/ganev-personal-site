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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ivan Ganev Personal Site`,
        short_name: `Ivan Ganev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.jpg`
      }
    }
  ]
};
