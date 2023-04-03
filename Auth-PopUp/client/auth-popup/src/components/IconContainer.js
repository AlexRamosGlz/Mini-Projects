import React, { useRef, useState } from "react";

const IconContainer = ({ Icon, iconLabel, setShowIconLabel, setIconLabel }) => {
  const iconContainerRef = useRef();

  return (
    <div
      className="icon__container"
      onMouseOver={() => {
        setShowIconLabel(true);
        setIconLabel(iconLabel);
      }}
      onMouseOut={() => {
        setShowIconLabel(false);
        setIconLabel("");
      }}
      ref={iconContainerRef}
    >
      <Icon className="icon" />
    </div>
  );
};

export default IconContainer;
