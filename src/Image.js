import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";

const Image = (props) => {
  const unscaledCharacters = [
    { name: "singed", top: 285, left: 725, height: 40, width: 25 },
    { name: "twisted fate", top: 205, left: 527, height: 22, width: 25 },
    { name: "rumble", top: 280, left: 45, height: 28, width: 35 },
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

  const onClick = (e) => {
    console.log(props.headerHeight);
    let x = e.clientX;
    let y = e.clientY - props.headerHeight;
    if (window.innerWidth > 1000) x -= (window.innerWidth - 1000) / 2;
    let found = false;
    characters.forEach((char) => {
      if (
        char.left < x &&
        x <= char.left + char.width &&
        char.top < y &&
        y <= char.top + char.height
      ) {
        console.log("found " + char.name);
      }
    });
  };

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
            onClick={onClick}
            onMouseMove={handleMove}
            src={image}
            style={{ width: "100%", maxWidth: 1000 }}
          ></img>
          <Identifiers show={false} characters={characters} />
        </div>
      </div>
    </div>
  );
};

const Identifiers = (props) => {
  if (props.show)
    return props.characters.map((char) => (
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
    ));
  else {
    return <div />;
  }
};

export default Image;
