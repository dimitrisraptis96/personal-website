const path = require('path');

module.exports = {
  siteMetadata: {
    author: 'Raptis Dimitris',
    description: 'My personal portfolio website! ',
    siteUrl: 'raptis.me',
    title: 'Raptis Dimitris ',
    twitter: 'https://twitter.com/d__raptis',
  },
  pathPrefix: "/personal-website",
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hipster.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
