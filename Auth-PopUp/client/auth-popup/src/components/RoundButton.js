import React from "react";

const RoundButton = ({ value }) => {
  return (
    <div className="round__button__container">
      <button className="round__button">{value}</button>
    </div>
  );
};

export default RoundButton;
