import React from "react";

function ValueDisplay(props) {
  return (
    <div>
      <h2>Value Entered by Admin:</h2>
      <p>{props.value}</p>
    </div>
  );
}

export default ValueDisplay;
