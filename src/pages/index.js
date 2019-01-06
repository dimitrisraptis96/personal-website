import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Twitter } from 'react-feather';
import { Instagram } from 'react-feather';

const darkgreen = "#0D7B44";
const green = "#33FF99";
const black = "#121212";
const white = "#f5f5f5";

const Content = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  min-width: calc(100% - 10%);
  min-height: 100%;
  max-width: calc(100% - 10%);
  /* max-height: 100%; */
  margin: 0;

  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ececec;
`;

const Typography = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: regular;
  color: #121212;
`;

const Bold = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');
	font-family: 'Abril Fatface', cursive;
  font-size: 5em;
  /* font-weight: bold; */
  color: #121212;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-self: flex-end;
  justify-self: flex-end; */
  padding: 1em 2em;

  position: absolute;
  bottom: 0;
  right: 0;
  
  
  > svg {
    margin: 0.5em;
  }
`;

const Image = styled(Img)`
  box-shadow: 0 8px 6px -6px black;
  border-radius: 1000px;
`;

const Anchor = styled.a`
  padding: 10px;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #fff;
  
  :hover {
    > svg {
      stroke: ${green};
    }
  }
`;

const Green = styled.span`
  color: ${green};
`;

const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Homepage = ({data}) => (
  <Content>
    <Bold>
      Dimitris Raptis <Green>.</Green>
    </Bold>

    <Image fixed={data.file.childImageSharp.fixed} />

    <Typography >
      I design and build user interfaces
    </Typography>

    <IconWrapper>
      <Anchor href='https://github.com/dimitrisraptis96/'>
        <GitHub color={black} size={24}/>
      </Anchor>

      <Anchor href='https://twitter.com/d__raptis'>
        <Twitter color={black} size={24}/>
      </Anchor>

      <Anchor href='https://www.instagram.com/glitch_aholic/'>
        <Linkedin color={black} size={24}/>
      </Anchor>

      <Anchor href='https://www.linkedin.com/in/dimitris-raptis-a7088b132/'>
        <Instagram color={black} size={24}/>
      </Anchor>
    </IconWrapper>

  
  </Content>
)

export default Homepage;

export const query = graphql`
  query {
    file (relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;