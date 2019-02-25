import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { black } from "../utils/colors";

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${black};
`;


export default CustomLink;
