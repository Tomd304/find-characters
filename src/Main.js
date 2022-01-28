import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";
import Image from "./Image";

const Main = () => {
  const headerHeight = 100;
  return (
    <div className="Main" style={{ backgroundColor: "black", height: "100vh" }}>
      <header className="Main-header"></header>
      <h1
        style={{
          height: headerHeight,
          margin: 0,
          textAlign: "center",
          color: "white",
          paddingTop: 30,
          boxSizing: "border-box",
        }}
      >
        Main
      </h1>
      <Image headerHeight={headerHeight} />
    </div>
  );
};

export default Main;
