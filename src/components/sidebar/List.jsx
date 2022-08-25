import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ charData, currentChar, setCurrentChar }) => {
  console.log("list", charData);

  return (
    <div className="list">
      {charData.map((char) => (
        <ListItem key={char.id} char={char} />
      ))}
    </div>
  );
};
