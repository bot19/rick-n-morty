import React from "react";

export const ListItem = ({ char }) => {
  const { name, image, location, species } = char;

  return (
    <div className="item">
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
