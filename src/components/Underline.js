import React from 'react';
import styled from 'styled-components';

import { green } from "../utils/colors";

const Underline = styled.span`
  background-image: linear-gradient(120deg, ${green}, ${green} 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 78%;
  transition: background-size 0.25s ease-in;
`;

export default Underline;