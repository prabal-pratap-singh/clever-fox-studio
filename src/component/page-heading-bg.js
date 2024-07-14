import React from "react";
export default function PageHeadingBg(props) {
  const { pageHeadingBgUrl } = props;
  // "url(https://i.ibb.co/S7RkcQg/Hero-Image-Contact-Us-bg.png)"
  return (
    <div>
      <div
        style={{
          backgroundImage:
            `url(${pageHeadingBgUrl})`,
          position: "absolute",
          width: "100%",
          height: "560px",
          mixBlendMode: "luminosity",
          backgroundSize: "cover", // or 'contain' depending on your preference
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/HVxPLKS/Hero-Image-Overlaycontact-Us-bg-overlay.png)",
          position: "absolute",
          width: "100%",
          height: "142px",
          top: "438px",
          backgroundSize: "cover", // or 'contain' depending on your preference
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "560px",
          left: "0px",
          top: "0px",

          background: "rgba(0, 0, 0, 0.6)",
          mixBlendMode: "luminosity",
        }}
      ></div>
    </div>
  );
}
