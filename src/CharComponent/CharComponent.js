import React from "react";

const charComponent = props => {
  const cssStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <div style={cssStyle} onClick={props.click}>
      {props.inputChar}
    </div>
  );
};

export default charComponent;
