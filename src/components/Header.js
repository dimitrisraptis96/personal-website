import React from 'react';
import styled from 'styled-components';
import { black } from "../utils/colors";

const Header = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 3em;
  font-weight: bold;
  text-align: left;
  color: ${black};
  margin-bottom: 0.75rem;
`;

export default Header;