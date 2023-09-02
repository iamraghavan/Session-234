import React, { useState } from "react";

function ValueInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>Enter Value: </label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default ValueInput;
