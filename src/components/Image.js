import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import {
  radius,
  shadow,
} from '../utils/styles';
 
const Image = styled(Img)`
  box-shadow: ${shadow};
  border-radius: ${radius};
  max-width: 40px;
  max-height: 40px;
  margin-right: 1em;
`;

export default Image;