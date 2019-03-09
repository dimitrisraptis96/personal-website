import React from 'react';
import styled from 'styled-components';

import { 
  FiGithub as GitHub,
  FiLinkedin as Linkedin,
  FiTwitter as Twitter,
  FiInstagram as Instagram,
} from 'react-icons/fi';
import {  FaDribbble as Dribbble } from 'react-icons/fa';
import {
  green,
  gray,
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
      fill: ${(props) => props.isFill ? green:''};
    }
  }
`;

const Icons = ({}) => {
  
  return (
    <Wrapper>
      <Anchor href='https://github.com/dimitrisraptis96/'>
        <GitHub color={gray} size={24}/>
      </Anchor>

      <Anchor href='https://twitter.com/d__raptis'>
        <Twitter color={gray} size={24}/>
      </Anchor>

      <Anchor href='https://dribbble.com/dmraptis' isFill={true}>
        <Dribbble color={gray} size={25}/>
      </Anchor>

      <Anchor href='https://www.linkedin.com/in/dimitris-raptis-a7088b132/'>
        <Linkedin color={gray} size={24}/>
      </Anchor>

      <Anchor href='https://www.instagram.com/dim_raptis/'>
        <Instagram color={gray} size={24}/>
      </Anchor>
    </Wrapper>    
  );
};

export default Icons;