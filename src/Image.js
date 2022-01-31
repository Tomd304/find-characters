import image from "./character-image.jpg";
import { useLayoutEffect, useState } from "react";

const Image = (props) => {
  const scaleCharacterArray = (charArr) => {
    const conversion = window.innerWidth / props.maximumWidth;
    return props.unscaledCharacters.map((character) => {
      return {
        name: character.name,
        top: character.top * conversion,
        left: character.left * conversion,
        height: character.height * conversion,
        width: character.width * conversion,
      };
    });
  };

  const [characters, setCharacters] = useState(
    window.innerWidth < props.maximumWidth
      ? scaleCharacterArray(props.unscaledCharacters)
      : props.unscaledCharacters
  );

  useLayoutEffect(() => {
    const scaleCharacters = () => {
      setCharacters(
        window.innerWidth < props.maximumWidth
          ? scaleCharacterArray(props.unscaledCharacters)
          : props.unscaledCharacters
      );
    };

    window.addEventListener("resize", scaleCharacters);
    return () => window.removeEventListener("resize", scaleCharacters);
  }, []);

  const onClick = (e) => {
    console.log(props.headerHeight);
    let x = e.clientX;
    let y = e.clientY - props.headerHeight;
    if (window.innerWidth > props.maximumWidth)
      x -= (window.innerWidth - props.maximumWidth) / 2;
    characters.forEach((char) => {
      if (
        char.left < x &&
        x <= char.left + char.width &&
        char.top < y &&
        y <= char.top + char.height
      ) {
        props.setCharacterFound(char.name);
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
          <img
            onClick={onClick}
            src={image}
            style={{ width: "100%", maxWidth: props.maximumWidth }}
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
