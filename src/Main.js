import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";
import Image from "./Image";

const Main = () => {
  return (
    <div className="Main" style={{ backgroundColor: "black", height: "100vh" }}>
      <header className="Main-header"></header>
      <h1
        style={{
          height: "10vh",
          margin: 0,
          textAlign: "center",
          color: "white",
          paddingTop: 30,
        }}
      >
        Main
      </h1>
      <Image />
    </div>
  );
};

export default Main;
