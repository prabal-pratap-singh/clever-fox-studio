import { useState } from "react";
export default function Navbar() {
  const items = ["Home", "About", "Services", "Contact"];
  return (
    <section
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        zIndex: "99",
        columnGap: "248px",
        marginTop: "19px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "7.5px",
          alignItems: "center",
          paddingLeft: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: " 12px",
            height: "12px",
            backgroundColor: "#47E4BF",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: " 12px",
            height: "12px",
            backgroundColor: "#FFFFFF",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: " 12px",
            height: "12px",
            backgroundColor: "#47E4BF",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          columnGap: "56px",
          width: "100%",
          paddingTop: "10px",
          margin: "0",
          cursor: "default",
        }}
      >
        {items.map((item, index) => (
          <li
            className={item}
            key={index}
            style={{
              fontFamily: " Plus Jakarta Sans",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "20.16px",
              textAlign: "left",
              height: "20px",
            }}
          >
            <a
              href={`${item.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <style>
        {`
            li{
                color:white;
            }
            li:hover{
                color: #47E4BF;
            }
            li a:visited{
                color: white
            }
            li a:hover{
                color: #47E4BF;
            }
            `}
      </style>
    </section>
  );
}
