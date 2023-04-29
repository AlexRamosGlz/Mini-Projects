import React from "react";

const TextButton = ({ text, onClick }) => {
  return (
    <div id="text__button__container">
      <button
        className="text__button"
        onClick={() => onClick(text === "Login" ? true : false)}
      >
        <h3>{text}</h3>
      </button>
    </div>
  );
};

export default TextButton;
