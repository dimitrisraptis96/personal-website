import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { black, green } from "../utils/colors";

const Button = styled.div`
  color: ${black};
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1em;
  margin: 1em auto;
  text-transform: capitalize;
  font-weight: bold;
  
  :after,
  :before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  :after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${black};
    border-right-color: ${black};
  }

  :before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${black};
    border-left-color: ${black};
  }

  :hover,
  :hover:after,
  :hover:before {
    color: ${green};
    border-bottom-color: ${green};
    border-right-color: ${green};
    border-top-color: ${green};
    border-left-color: ${green};
    width: 10em;
    height: 3.5em;
  }
`;

Button.propTypes = {
  type: PropTypes.string
};

Button.defaultProps = {
  type: "primary"
};

export default Button;
