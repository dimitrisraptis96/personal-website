const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Dimitris Raptis | Portfolio',
  },
  pathPrefix: "/personal-website",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
