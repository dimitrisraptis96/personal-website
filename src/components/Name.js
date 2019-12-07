import React from "react";
import Underline from "./Underline";
import Header from "./Header";

const Name = props => {
  return (
    <Header>
      <p>👋</p>
      <div>
        I'm <Underline>Jim Raptis</Underline>
      </div>
    </Header>
  );
};

export default Name;
