import React, { useEffect, useState } from "react";
import Input from "./Inputs";
import IconContainer from "./IconContainer";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Spacer } from "../svg/spacer.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import RoundButton from "./RoundButton";
import TextButton from "./TextButton";
import CancelButton from "./CancelButton";

const submitData = (isToLogin, data) => {
  //TODO submit data to API
};

const thirdPartySignin = async (microservice, navigate) => {
  debugger;
  const service = microservice.toLowerCase();
  //TODO OAuth API

  await fetch(`https://localhost:8000/auth/${service}`);
};

const PopUp = ({ setOpen, close }) => {
  const navigate = useNavigate();
  const [iconLabel, setIconLabel] = useState("");
  const [toLogin, setToLogin] = useState(true);
  const [emailInputData, setEmailInputData] = useState({});
  const [passwordInputData, setPasswordInputData] = useState({});

  return (
    <div
      className={`popup__container auth__container ${
        close ? "show__popup" : ""
      }`}
    >
      <div className="tabs__container">
        <TextButton text={"Login"} onClick={setToLogin} />
        <TextButton text={"SignUp"} onClick={setToLogin} />
        <CancelButton onClick={() => setOpen(false)} />
      </div>
      {toLogin ? (
        <div className="login__container auth__container">
          <h2>Login</h2>
          <div id="inputs__container">
            <Input
              placeholder={"email"}
              inputType={"email"}
              onChange={setEmailInputData}
            />
            <Input
              placeholder={"password"}
              inputType={"password"}
              onChange={setPasswordInputData}
            />
          </div>
          <RoundButton
            value={"Login"}
            onClick={() =>
              submitData(toLogin, { emailInputData, passwordInputData })
            }
          />
        </div>
      ) : (
        <div className="signup__container">
          <h2>Sign Up</h2>
          <div id="inputs__container">
            <Input
              placeholder={"email"}
              inputType={"email"}
              onChange={setEmailInputData}
            />
            <Input
              placeholder={"password"}
              inputType={"password"}
              onChange={setPasswordInputData}
            />
          </div>
          <RoundButton
            value={"Sign Up"}
            onClick={() =>
              submitData(toLogin, { ...emailInputData, ...passwordInputData })
            }
          />
        </div>
      )}
      <Spacer className="spacer" />
      <div id="alternative__signin__container">
        <h2>Sign in With</h2>
        <div id="icons__container">
          <IconContainer
            Icon={FcGoogle}
            iconLabel={"google"}
            setIconLabel={setIconLabel}
            onClick={() => thirdPartySignin(iconLabel, navigate)}
          />
          <IconContainer
            Icon={FaGithub}
            iconLabel={"github"}
            setIconLabel={setIconLabel}
            onClick={() => thirdPartySignin(iconLabel, navigate)}
          />
        </div>
        <p className="icon__label">{iconLabel}</p>
      </div>
    </div>
  );
};

export default PopUp;
