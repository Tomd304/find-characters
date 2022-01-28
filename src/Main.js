import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";
import Image from "./Image";
import { findByLabelText } from "@testing-library/react";

const Main = () => {
  const headerHeight = 100;
  const [offset, setOffset] = useState(
    window.innerWidth > 1000 ? (window.innerWidth - 1000) / 2 : 0
  );

  const [characters, setCharacters] = useState([
    {
      name: "Singed",
      top: 285,
      left: 725,
      height: 40,
      width: 25,
      found: false,
      color: "green",
    },
    {
      name: "Twisted Fate",
      top: 205,
      left: 527,
      height: 22,
      width: 25,
      found: false,
      color: "blue",
    },
    {
      name: "Rumble",
      top: 280,
      left: 45,
      height: 28,
      width: 35,
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
      if (window.innerWidth > 1000) {
        setOffset((window.innerWidth - 1000) / 2);
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
          maxWidth: 1000,
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
      />
    </div>
  );
};

export default Main;
