import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import styled from 'styled-components';
import {gray} from '../utils/colors';

const Wrapper = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: regular;
  color: ${gray};
  width: 100%;
  margin-top: 0;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Bio = props => {
  const { fixed } = props;

  return (
    <Wrapper>
      <Image fixed={this.props.data.me.childImageSharp.fixed} />
      <p>
        <b>Creative Problem-Solving</b>
        <br />
        Frontend engineer @loceye.io
      </p>
    </Wrapper>
  );
};

Bio.propTypes = {
  fixed: PropTypes.object
};

Bio.defaultProps = {
  fixed: null
};

export default Bio;
