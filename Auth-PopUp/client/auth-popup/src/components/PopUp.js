import React, { useState } from "react";
import Input from "./Inputs";
import IconContainer from "./IconContainer";

import { ReactComponent as Spacer } from "../svg/spacer.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import RoundButton from "./RoundButton";

const PopUp = () => {
  const [showIconLabel, setShowIconLabel] = useState(false);
  const [iconLabel, setIconLabel] = useState("");

  return (
    <div className="popup__container">
      <h2>Login</h2>
      <div id="inputs__container">
        <Input value={"email"} type={"email"} />
        <Input value={"password"} type={"password"} />
      </div>
      <RoundButton value={"Login"} />
      <Spacer className="spacer" />
      <div id="alternative__signin__container">
        <h2>Sign in With</h2>
        <div id="icons__container">
          <IconContainer
            Icon={FcGoogle}
            iconLabel={"Google"}
            setShowIconLabel={setShowIconLabel}
            setIconLabel={setIconLabel}
          />
          <IconContainer
            Icon={FaGithub}
            iconLabel={"GitHub"}
            setShowIconLabel={setShowIconLabel}
            setIconLabel={setIconLabel}
          />
        </div>
        <p className="icon__label">{iconLabel}</p>
      </div>
    </div>
  );
};

export default PopUp;
