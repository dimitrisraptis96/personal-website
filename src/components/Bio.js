import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import { rgba } from "polished";

import Image from "./Image";

import { gray } from "../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 2rem 0 4rem 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Bio = ({ margin }) => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <Container>
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <Column>
              <p>
                Strive to craft usable, clean & accessible interfaces for
                humans.
              </p>
              <sup style={{ color: rgba(gray, 0.8) }}>
                Designer | Engineer | Co-Founder at Loceye
              </sup>
            </Column>
          </Container>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/me.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
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
