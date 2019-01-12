import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Emoji from "react-emojione";
import Button from '../components/button2';
import Icons from "../components/Icons";

import { darkgreen, green, black, gray, white } from "../utils/colors";

import { Transition, animated } from "react-spring";

const ButtonWrapper = styled(Button)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10em;
`;

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
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
`;

const Header = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 3em;
  font-weight: bold;
  text-align: left;
  color: ${black};
  margin-bottom: 0.75rem;
`;

const JobTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: regular;
  color: ${gray};
  width: 100%;
  margin-top: 0;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.5em;
  font-weight: regular;
  color: ${black};
  width: 100%;
  margin-bottom: 5rem;
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
  max-width: 40px;
  max-height: 40px;
  margin-right: 1em;
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

class Homepage extends React.Component {
  state = {
    items: []
  };

  async componentDidMount() {
    this.t1 && clearTimeout(this.t1);
    this.t2 && clearTimeout(this.t2);
    this.t3 && clearTimeout(this.t3);

    const name = {
      key: "name",
      content: (
        <Header>
          <Underline>Dimitris Raptis</Underline>
        </Header>
      )
    };

    const bio = {
      key: "bio",
      content: (
        <JobTitle>
          <Image fixed={this.props.data.me.childImageSharp.fixed} />
          <p>
            <b>Creative Problem-Solving</b>
            <br />
            Frontend engineer @loceye.io
          </p>
        </JobTitle>
      )
    };

    const quote = {
      key: "quote",
      content: (
        <Paragraph>
          <Emoji>I design and build user interfaces 🤟 </Emoji>
        </Paragraph>
      )
    };

    const button = {
      key: 'btn',
      content: ( <Button>My work</Button> )
    }

    const offset = 300;
    const interval = 700;

    const items = [button, quote, bio, name];

    items.map((item, index) => {
      setTimeout(
        () => this.setState({ items: [...this.state.items, item] }),
          offset + (index+1) * interval
      )
    });
  }

  render() {
    const { items } = this.state;

    return (
      <Content>
        <Transition
          items={items}
          keys={item => item.key}
          from={{ transform: "translate3d(-1000px, 0,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-1000px,0)" }}
        >
          {item => props => <div style={props}>{item.content}</div>}
        </Transition>
        {/* <ButtonWrapper>See my work</ButtonWrapper> */}
        <Icons />
      </Content>
    );
  }
}

export default Homepage;

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
