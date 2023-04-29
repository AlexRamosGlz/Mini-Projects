import React from "react";

const RoundButton = ({ value, onClick }) => {
  return (
    <div className="round__button__container">
      <button className="round__button" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default RoundButton;
