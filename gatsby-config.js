const path = require('path');

module.exports = {
  siteMetadata: {
    author: 'Raptis Dimitris',
    description: 'My god damn portfolio!',
    siteUrl: 'raptis.wtf',
    title: 'Raptis Dimitris',
    blogTitle: 'Blog',
    social: {
      twitter: 'https://twitter.com/d__raptis',
    }
  },
  pathPrefix: "/personal-website",
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Dimitris Raptis`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#33FF99`,
        display: `minimal-ui`,
        icon: `${__dirname}/content/assets/munch.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
  ],
}
