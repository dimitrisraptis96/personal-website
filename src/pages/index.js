import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

import Icons from '../components/Icons';

import {
  darkgreen,
  green,
  black,
  white
} from '../utils/colors';


const Content = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  margin: 0;

  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ececec;
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  font-weight: regular;
  color: #121212;
  text-align: center;
  width: 100%;

  padding: 2em;
`;

const Header = styled.h2`
	font-family: 'Abril Fatface', cursive;
  font-size: 5em;
  font-weight: normal;
  text-align: center;
  color: #121212;
`;


const Image = styled(Img)`
  box-shadow: 0 8px 6px -6px black;
  border-radius: 1000px;
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
    <Header>
      Dimitris Raptis <Green>.</Green>
    </Header>

    <Image fixed={data.file.childImageSharp.fixed} />

    <Paragraph >
      I design and build user interfaces
    </Paragraph>

    <Icons/>

  
  </Content>
)

export default Homepage;

export const query = graphql`
  query {
    file (relativePath: { eq: "me.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
