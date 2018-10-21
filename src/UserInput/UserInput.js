import React from "react";

const userInput = props => {
  const cssStyle = {
    borderRadius: "25%",
    color: "blue",
    borderColor: "red"
  };

  return (
    <input style={cssStyle} onChange={props.changed} value={props.username} />
  );
};

export default userInput;
