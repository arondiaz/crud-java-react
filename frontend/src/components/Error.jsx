import React from "react";
import "./Error.css"

const Error = (props) => {
  return (
    <div className="error-container">
      <h3>{props.error}</h3>
    </div>
  );
};

export default Error;
