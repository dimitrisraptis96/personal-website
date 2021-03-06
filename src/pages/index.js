import React from "react";
import { Link } from "gatsby";
import { Transition } from "react-spring/renderprops";
import styled from "styled-components";

import BuyMeACoffee from "../components/BuyMeACoffee";
import Quote from "../components/Quote";
import Bio from "../components/Bio";
import Button from "../components/Button";
import Name from "../components/Name";
import Icons from "../components/Icons";
import SEO from "../components/seo";

import { white, black } from "../utils/colors";

const Content = styled.div`
  background-color: ${white};
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

class Homepage extends React.Component {
  state = {
    items: []
  };

  createObject = (key, component) => ({
    key,
    content: component
  });

  async componentDidMount() {
    const name = this.createObject("name", <Name />);
    const bio = this.createObject("bio", <Bio margin={0.25} />);
    const quote = this.createObject("quote", <Quote />);
    const blog = this.createObject(
      "blog",
      <Link to="/blog" style={{ textDecoration: "none", color: black }}>
        <Button>Blog</Button>
      </Link>
    );

    const offset = 200;
    const interval = 400;

    const items = [blog, quote, bio, name];

    items.map((item, index) => {
      setTimeout(
        () => this.setState({ items: [...this.state.items, item] }),
        offset + (index + 1) * interval
      );
    });
  }

  render() {
    const { items } = this.state;

    return (
      <Content>
        <SEO
          title="Home"
          keywords={[
            `portfolio`,
            `frontend`,
            `designer`,
            `ux`,
            "ui",
            "builder",
            "raptis",
            "dimitris"
          ]}
        />
        <Transition
          items={items}
          keys={item => item.key}
          from={{ transform: "translate3d(-1000px, 0,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-1000px,0)" }}
        >
          {item => props => <div style={props}>{item.content}</div>}
        </Transition>
        <Icons />
        <BuyMeACoffee />
      </Content>
    );
  }
}

export default Homepage;
