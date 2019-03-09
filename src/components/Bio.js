import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { rgba } from 'polished';

import Image from "./Image";

import { rhythm } from "../utils/typography";
import { gray } from '../utils/colors';

const Bio = ({margin}) => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginTop: rhythm(margin),
              marginBottom: rhythm(margin),
            }}
          >
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <p>
              Crafting clean and user-friendly things since 1996.
              <br />
              <sup style={{color: rgba(gray, .8)}}>Frontend engineer @loceye.io</sup>
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/new-me.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
