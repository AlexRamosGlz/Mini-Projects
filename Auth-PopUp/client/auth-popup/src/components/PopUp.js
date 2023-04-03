import React, { useState } from "react";
import Input from "./Inputs";

const PopUp = () => {
  return (
    <div className="popup__container">
      <div id="inputs__container">
        <Input value={"email"} />
        <Input value={"password"} />
      </div>
    </div>
  );
};

export default PopUp;
