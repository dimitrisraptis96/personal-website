import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { black, green } from "../utils/colors";
import { radius, shadow } from "../utils/theme";

const PADDING = "1em";

const Wrapper = styled.a`
  color: inherit;
  padding: ${PADDING} 22px;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease;

  :before {
    box-shadow: ${shadow};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: ${radius};
    background: ${green}44;
    width: calc(23px + 2 * ${PADDING});
    height: calc(23px + 2 * ${PADDING});
    transition: all 0.3s ease;
  }

  > span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: capitalize;
    vertical-align: middle;
  }

  > svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: ${black};
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  :hover {
    color: white;
    :before {
      width: 100%;
      background: ${green};
    }
    svg {
      stroke: white;

      transform: translateX(0);
    }
  }

  :active {
    transform: scale(0.96);
  }
`;

const Button = props => {
  const { prop } = props;

  return (
    <Wrapper href="#">
      <span>{props.children}</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </Wrapper>
  );
};

export default Button;
