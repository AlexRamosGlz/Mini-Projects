import React, { useState } from "react";

const Input = ({ value, type }) => {
  return (
    <div className="input__text">
      <input type={type} placeholder={value} className="input"></input>
    </div>
  );
};

export default Input;
