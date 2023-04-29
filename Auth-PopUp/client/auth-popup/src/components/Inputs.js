import React, { useState } from "react";

const Input = ({ inputType, placeholder, onChange }) => {
  return (
    <div className="input__text">
      <input
        type={inputType}
        placeholder={placeholder}
        className="input"
        onChange={(e) => onChange({ type: inputType, value: e.target.value })}
      ></input>
    </div>
  );
};

export default Input;
