import React from 'react';
import styled from 'styled-components';

import { 
  GitHub,
  Linkedin,
  Twitter,
  Instagram,
} from 'react-feather';

import {
  black,
  green,
} from '../utils/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;

  position: absolute;
  bottom: 0;
  right: 0;

  > svg {
    margin: 0.5em;
  }
`;

const Anchor = styled.a`
  padding: 10px;
  
  :hover {
    > svg {
      stroke: ${green};
    }
  }
`;

const Icons = ({}) => {
  
  return (
    <Wrapper>
      <Anchor href='https://github.com/dimitrisraptis96/'>
        <GitHub color={black} size={24}/>
      </Anchor>

      <Anchor href='https://twitter.com/d__raptis'>
        <Twitter color={black} size={24}/>
      </Anchor>

      <Anchor href='https://www.linkedin.com/in/dimitris-raptis-a7088b132/'>
        <Linkedin color={black} size={24}/>
      </Anchor>

      <Anchor href='https://www.instagram.com/dim_raptis/'>
        <Instagram color={black} size={24}/>
      </Anchor>
    </Wrapper>    
  );
};

export default Icons;