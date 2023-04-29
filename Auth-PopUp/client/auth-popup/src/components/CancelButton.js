import React from "react";
import { CgClose } from "react-icons/cg";

const CancelButton = ({ onClick }) => {
  return (
    <div className="close__button__container">
      <button onClick={onClick} className="close__button">
        <CgClose className="cancel__icon" />
      </button>
    </div>
  );
};

export default CancelButton;
