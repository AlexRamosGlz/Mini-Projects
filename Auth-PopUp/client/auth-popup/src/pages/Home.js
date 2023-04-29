import React, { useState } from "react";
import background from "../svg/background.jpg";
import RoundButton from "../components/RoundButton";
import PopUp from "../components/PopUp";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="home">
      <RoundButton
        value={"Click Me"}
        onClick={() => setShowPopUp(true)}
      ></RoundButton>
      <PopUp setOpen={setShowPopUp} close={showPopUp} />
    </div>
  );
};

export default Home;
