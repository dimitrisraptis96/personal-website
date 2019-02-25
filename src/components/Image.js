import Img from 'gatsby-image';
import styled from 'styled-components';

import {
  radius,
  shadow,
} from '../utils/styles';
 
const Image = styled(Img)`
  box-shadow: ${shadow};
  border-radius: ${radius};
  max-width: 50px;
  max-height: 50px;
  margin-right: 1.5em;
`;

export default Image;