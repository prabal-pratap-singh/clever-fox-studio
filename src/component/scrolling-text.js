import React, { useState } from "react";

function ScrollingText(props) {
  const text = props.text;
  const behavior = props.behavior;
  let speed = "25";
  return (
    <marquee
      behavior={`${behavior}`}
      scrollamount={`${speed}`}
    >
      <p
        style={{
          fontFamily: "Plus Jakarta Sans",
          fontSize: "180px",
          fontWeight: "800",
          lineHeight: "227px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "white",
        }}
      >
        {`${text}`}
      </p>
    </marquee>
  );
}
export default ScrollingText;
