import React from "react";
import { Link, graphql } from "gatsby";
import CustomLink from "../components/CustomLink";
import Bio from "../components/Bio";
import Layout from "../components/BlogLayout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { green, gray } from "../utils/colors";
import { rgba } from "polished";
import styled from "styled-components";
import Snakke from "react-snakke";

const Div = styled.div`
  img {
    margin-bottom: 0.25rem;
  }
  sup {
    color: ${rgba(gray, 0.8)};
    text-align: center;
  }
  blockquote {
    quotes: "“" "”" "“" "”";

    color: ${rgba(green, 0.8)};
    font-style: italic;
    /* font-family: "Abril Fatface"; */
    margin: 2rem;

    & > * {
      line-height: 1.7;
      margin: 0;
      font-weight: normal;
    }
  }
  blockquote:before {
    color: ${green};
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote:after {
    content: open-quote;
    opacity: 0;
    font-size: 4em;
    line-height: 0.1em;
    vertical-align: -0.4em;
    margin-left: calc(100% - 2rem);
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Snakke color={green} height="5px" opacity=".8" zIndex="10" />

        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <Div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
