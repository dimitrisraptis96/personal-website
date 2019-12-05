const path = require("path");

module.exports = {
  siteMetadata: {
    author: "Jim Raptis",
    description: "The life of Raptis!",
    siteUrl: "https://www.raptis.wtf",
    title: "Raptis Jim",
    blogTitle: "Blog",
    social: {
      twitter: "https://twitter.com/d__raptis"
    }
  },
  pathPrefix: "/personal-website",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jim Raptis`,
        short_name: `Jim Raptis portfolio`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#33FF99`,
        display: `minimal-ui`,
        icon: `${__dirname}/content/assets/munch.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION
      }
    },

    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    "gatsby-plugin-offline"
  ]
};
