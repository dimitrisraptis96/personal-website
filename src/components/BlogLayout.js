import React from "react";
import { Link } from "gatsby";

import Footer from "./Footer";
import Underline from "./Underline";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    

    if (location.pathname === '/blog') {
      header = (
        <h4
          style={{
            ...scale(1.5),
            fontFamily: `Poppins, sans-serif`,
            marginTop: 0,
            fontWeight: "bold",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Underline>Home</Underline>
          </Link>
        </h4>
      );
    } else {
      header = (
        <h4
          style={{
            ...scale(1.5),
            fontFamily: `Poppins, sans-serif`,
            marginTop: 0,
            fontWeight: "bold",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog`}
          >
            <Underline>Blog</Underline>
            {/* {title} */}
          </Link>
        </h4>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
