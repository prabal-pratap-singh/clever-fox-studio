import React from "react";
function PageHeading(props) {
  const {pageHeadingText} = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "250px",
        left: "120px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <p
        style={{
          color: "white",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "20.16px",
          textAlign: "left",
        }}
      >
        Xylosculpt.<span style={{ color: "#47E4BF" }}>{pageHeadingText}</span>
      </p>
      <p
        style={{
          color: "white",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "105px",
          fontWeight: "800",
          lineHeight: "95px",
          letterSpacing: "-7.199999809265137px",
          textAlign: "left",
          margin: "0",
        }}
      >
        {pageHeadingText}
      </p>
    </div>
  );
}

export default PageHeading;
