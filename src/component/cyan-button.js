import React, { useState } from "react";
import { Link } from "react-router-dom";
function CyanButton(props) {
  const [isHovered, setIsHovered] = useState(false);
  const svgStyles = {
    color: isHovered ? "white" : "#47e4bf",
    textColor: isHovered ? "#47e4bf" : "white",
  };
  const buttonText = props.text ? props.text : "Let's Talk";
  let buttonDiv = buttonText ;
  if (props.hyperlink) {
    buttonDiv = (
      <Link
        to={`${props.hyperlink}`}
        style={{ color: `${svgStyles.textColor}`, textDecoration: "none" }}
      >
        {buttonText}
      </Link>
    );
  } 
  return (
    <button
      style={{
        border: "none",
        position: props.position,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        background: `${svgStyles.color}`,
        transition: `background 0.5s`,
        left: props.left,
        top: props.top,
        width: props.width,
        height: props.height,
        zIndex: 2,
        ...props.style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        style={{
          color: `${svgStyles.textColor}`,
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "normal",
          transition: `color 0.5s`,
        }}
      >
        {buttonDiv}
      </span>
    </button>
  );
}

export default CyanButton;
