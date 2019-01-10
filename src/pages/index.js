import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import Emojify from 'react-emojione';

import Icons from '../components/Icons';

import {
  darkgreen,
  green,
  black,
  gray,
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
  align-items: flex-start;

  background-color: #ececec;
`;

const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: regular;
  color: ${black};
  /* text-align: center; */
  width: 100%;

  /* padding: 2em; */
`;

const Header = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  color: ${black};
`;

const Underline = styled.span`
  background-image: linear-gradient(120deg, ${green}, ${green} 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 78%;
  transition: background-size 0.25s ease-in;
`;

const Image = styled(Img)`
  box-shadow: 0 23px 40px rgba(0, 0, 0, 0.2);
  border-radius: 1000px;
  width: 150px;
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

const Homepage = ({data}) => {
  return(
    <Content>
      <Header>
        <Underline>
          Dimitris Raptis
        </Underline>
      </Header>
  
  
      <Paragraph >
        I design and build user interfaces
      </Paragraph>
  
      <Image fixed={data.me.childImageSharp.fixed} />
      <Icons/>
  
    
    </Content>
  );
}

export default Homepage;

export const query = graphql`
  query {
    me: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
