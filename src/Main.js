import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";
import Image from "./Image";
import { findByLabelText } from "@testing-library/react";

const Main = () => {
  const maximumWidth = 2000;
  const headerHeight = 100;
  const [offset, setOffset] = useState(
    window.innerWidth > maximumWidth
      ? (window.innerWidth - maximumWidth) / 2
      : 0
  );

  const [characters, setCharacters] = useState([
    {
      name: "Singed",
      top: (285 * maximumWidth) / 1000,
      left: (725 * maximumWidth) / 1000,
      height: (40 * maximumWidth) / 1000,
      width: (25 * maximumWidth) / 1000,
      found: false,
      color: "green",
    },
    {
      name: "Twisted Fate",
      top: (205 * maximumWidth) / 1000,
      left: (527 * maximumWidth) / 1000,
      height: (22 * maximumWidth) / 1000,
      width: (25 * maximumWidth) / 1000,
      found: false,
      color: "blue",
    },
    {
      name: "Rumble",
      top: (280 * maximumWidth) / 1000,
      left: (45 * maximumWidth) / 1000,
      height: (28 * maximumWidth) / 1000,
      width: (35 * maximumWidth) / 1000,
      found: false,
      color: "silver",
    },
  ]);

  const setCharacterFound = (name) => {
    setCharacters(
      characters.map((char) => {
        if (char.name == name) {
          const foundChar = char;
          foundChar.found = true;
          return foundChar;
        } else {
          return char;
        }
      })
    );
  };

  useLayoutEffect(() => {
    const offsetHeading = () => {
      if (window.innerWidth > maximumWidth) {
        setOffset((window.innerWidth - maximumWidth) / 2);
      }
    };
    window.addEventListener("resize", offsetHeading);
    return () => window.removeEventListener("resize", offsetHeading);
  }, []);

  return (
    <div
      className="Main"
      style={{ backgroundColor: "black", height: "100vh", color: "white" }}
    >
      <header className="Main-header"></header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: offset,
          maxWidth: maximumWidth,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: headerHeight,
          }}
        >
          <h1>Find:</h1>
          <div
            name="notFoundCharacters"
            style={{ display: "flex", marginLeft: 15 }}
          >
            {characters
              .filter((char) => char.found == false)
              .map((char) => (
                <h2 style={{ padding: "0 10px", color: char.color }}>
                  {char.name}
                </h2>
              ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>Found:</h1>
          <div
            name="foundCharacters"
            style={{ display: "flex", marginLeft: 15 }}
          >
            {characters
              .filter((char) => char.found == true)
              .map((char) => (
                <h2 style={{ padding: "0 10px", color: char.color }}>
                  {char.name}
                </h2>
              ))}
          </div>
        </div>
      </div>
      <Image
        headerHeight={headerHeight}
        unscaledCharacters={characters}
        setCharacterFound={setCharacterFound}
        maximumWidth={maximumWidth}
      />
    </div>
  );
};

export default Main;
