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

  margin: 2rem 0;
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
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <Container>
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <Column>
              <p>Crafting clean and user-friendly things since 1996.</p>
              <sup style={{ color: rgba(gray, 0.8) }}>
                Frontend engineer @loceye.io
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
