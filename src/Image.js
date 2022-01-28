import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";

const Image = () => {
  const unscaledCharacters = [
    { name: "singed", top: 285, left: 725, height: 40, width: 25 },
    { name: "twisted fate", top: 205, left: 527, height: 22, width: 25 },
    { name: "rumble", top: 275, left: 45, height: 35, width: 35 },
  ];

  const scaleCharacterArray = (charArr) => {
    const conversion = window.innerWidth / 1000;
    return unscaledCharacters.map((character) => {
      return {
        name: character.name,
        top: character.top * conversion,
        left: character.left * conversion,
        height: character.height * conversion,
        width: character.width * conversion,
      };
    });
  };

  const handleChange = () => {
    console.log("img size changed");
  };
  const [size, setSize] = useState([0, 0]);

  const [characters, setCharacters] = useState(
    window.innerWidth < 1000
      ? scaleCharacterArray(unscaledCharacters)
      : unscaledCharacters
  );

  useLayoutEffect(() => {
    const scaleCharacters = () => {
      setCharacters(
        window.innerWidth < 1000
          ? scaleCharacterArray(unscaledCharacters)
          : unscaledCharacters
      );
    };

    window.addEventListener("resize", scaleCharacters);
    return () => window.removeEventListener("resize", scaleCharacters);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          {" "}
          <img
            //onClick={(e) => handleClick(e)}
            onChange={handleChange}
            src={image}
            style={{ width: "100%", maxWidth: 1000 }}
          ></img>
          {characters.map((char) => (
            <div
              name={char.name}
              style={{
                border: "1px red solid",
                width: char.width,
                height: char.height,
                left: char.left,
                top: char.top,
                boxSizing: "border-box",
                position: "absolute",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Image;
