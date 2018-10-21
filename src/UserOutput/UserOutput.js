import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="user-outputs">
      <p className="user-output">Username is {props.username}</p>
      <p className="user-output">Again I say, {props.username}, you hear?</p>
    </div>
  );
};

export default userOutput;
