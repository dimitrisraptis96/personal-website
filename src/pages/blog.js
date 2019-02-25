import React from "react"
import { Link, graphql } from "gatsby"
import CustomLink from "../components/CustomLink";
import Underline from "../components/Underline"

import {rgba} from "polished"
import Bio from "../components/bio"
import Layout from "../components/BlogLayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { gray } from "../utils/colors";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.blogTitle
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `raptis`, `javascript`, `react`]}
        />
        <Bio margin={1.5}/>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <CustomLink style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </CustomLink>
              </h3>
              <small style={{color: rgba(gray, .5)}}>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.summary }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        blogTitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`
