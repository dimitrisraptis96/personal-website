const path = require('path');

module.exports = {
  siteMetadata: {
    author: 'Raptis Dimitris',
    description: 'My personal portfolio website! ',
    siteUrl: 'raptis.me',
    title: 'Dimitris Raptis ',
    twitter: 'https://twitter.com/d__raptis',
  },
  pathPrefix: "/personal-website",
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
  ],
}
