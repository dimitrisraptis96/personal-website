import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2em 0;
`;

const moving = keyframes`
  0% {transform: rotate(0deg)}
  25% {transform: rotate(-15deg)}
  50% {transform: rotate(0deg)}
  75% {transform: rotate(15deg)}
  100% {transform: rotate(0deg)}
`;

const Emoji = styled.i`
  display: inline-block;
  animation: ${moving} .8s ease-in-out infinite;
`;

class Footer extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <Container>
        <sub>
          <sup>
            Made with <Emoji>🤙</Emoji> by{" "}
            <a href="https://twitter.com/d__raptis" target="_blank">
              @d__raptis
            </a>
          </sup>
        </sub>
      </Container>
    );
  }
}

export default Footer;
