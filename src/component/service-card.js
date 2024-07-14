import React, { useState } from "react";
function ServiceCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const svgStyles = {
    width: isHovered ? "85px" : "96px",
    height: isHovered ? "85px" : "96px",
    transition: "width 1s, height 1s, fill 1s",
  };

  const pathStyles = {
    fill: isHovered ? "#47E4BF" : "white",
  };
  const { cardName, cardBody, cardSvg } = props.cardContent;
  // const coloredCardSvg = cardSvg.replace(/<svg[^>]*>/, `<svg fill="red">`);
  return (
    <div
      style={{
        position: "relative",
        width: "290px",
        height: "330px",
        background: "#101010",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          left: "40px",
          top: "30px",
          maxWidth: "200px",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: cardSvg }}
          style={{ ...pathStyles,
            ...svgStyles }}
        />
        <h1
          style={{
            position:"absolute",
            top:"104px",
            color: pathStyles.fill,
            fontFamily: "Plus Jakarta Sans",
            fontSize: "20px",
            fontWeight: "800",
            textAlign: "left",
            lineHeight: "21px",
            marginTop: "15px",
          }}
        >
          {cardName}
        </h1>
        <p
          style={{
            position:"absolute",
            top:"156px",
            color: "#5D5D5D",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "13.86px",
            textAlign: "left",
            marginTop: "25px",
            paddingBottom: "12.5px",
            borderBottom: "1px solid #5D5D5D",
          }}
        >
          {" "}
          {cardBody}.{" "}
        </p>
      </div>
    </div>
  );
}
export default ServiceCard;
