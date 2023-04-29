import React, { useRef, useState } from "react";

const IconContainer = ({
  Icon,
  iconLabel,
  setShowIconLabel,
  setIconLabel,
  onClick,
}) => {
  const iconContainerRef = useRef();

  return (
    <div
      className="icon__container"
      onMouseOver={() => {
        setIconLabel(iconLabel);
      }}
      onMouseOut={() => {
        setIconLabel("");
      }}
      onClick={onClick}
      ref={iconContainerRef}
    >
      <Icon className="icon" />
    </div>
  );
};

export default IconContainer;
