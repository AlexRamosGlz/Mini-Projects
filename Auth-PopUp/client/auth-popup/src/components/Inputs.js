import React, { useState } from "react";

const Input = ({ value }) => {
  const [isPassword, setIsPassword] = useState(false);

  return (
    <div className="input__text">
      <input type={isPassword && "password"} placeholder={value}></input>
    </div>
  );
};

export default Input;
