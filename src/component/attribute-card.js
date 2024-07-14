import { ReactComponent as BgBadge } from "../home/assets/bg-badge.svg";
import React, { useState } from "react";
import "./attribute.css";
function AttributeCard(props) {
  // prop json ==> {imagePath: 'https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', attributeContentHeading:"Creative Agency", attributeContentBody:"we create path-breaking work that challenges the status qua and positively impact our client's ubsiness. We make sure how we communicate, and design helps our brand stand out", badge:{imagePath:"https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}, altName:"altName"};
  const [hoverAnimation, setHoverAnimation] = useState(true);
  const fadingAnimation = hoverAnimation ? "fadeIn" : "fadeOut";
  const expandingAnimation = hoverAnimation ? "backwardAnimation" : "forwardAnimation";
  props = props.commonProps;
  return (
    <div
      className="attributePanel"
      onMouseEnter={() => setHoverAnimation(false)}
      onMouseLeave={() => setHoverAnimation(true)}
    >
      <img
        src={props.imagePath}
        className="attributePanelBg"
        alt={props.altName}
      />
      <div className="attributePanelFeature">
        <div className="attributeText">
          <div className={`attributeTextBg ${expandingAnimation}`}></div>
          <span className={`attributeTextContent ${expandingAnimation}`}> {props.attributeContentHeading}</span>
          <div className={`attributeTextContentBody ${fadingAnimation}`}>
            <p>{props.attributeContentBody}</p>
            <hr/>
          </div>
        </div>
        <div className={`attributeBadge ${fadingAnimation}`}>
          <BgBadge className="badgeBg" />
          <img
            src={props.badge.imagePath}
            className="badgeLogo"
            alt={props.badge.altName}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AttributeCard;
