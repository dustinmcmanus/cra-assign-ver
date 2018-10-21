import React from "react";

const validationComponent = props => {
  const minLength = 5;
  let validationOutput;

  if (props.inputLength < minLength) {
    validationOutput = "Text too short";
  } else {
    validationOutput = "Text long enough";
  }
  return <p>{validationOutput}</p>;
};

export default validationComponent;
