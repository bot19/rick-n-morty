import React from "react";

export const ListItem = ({ char, currentChar, setCurrentChar }) => {
  const { name, image, location, species } = char;
  const isActive = char.id === currentChar?.id;

  return (
    <div
      className={`item ${isActive ? "is-active" : ""}`}
      onClick={() => setCurrentChar(char)}
    >
      <div className="item__highlight" />
      <img src={image} alt={`thumbnail of ${name}`} />
      <div>
        <h3>{name}</h3>
        <div>
          <b>Location:</b> {location.name}
        </div>
        <div>
          <b>Species:</b> {species}
        </div>
      </div>
    </div>
  );
};
