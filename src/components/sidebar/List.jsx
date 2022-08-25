import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ charData, currentChar, setCurrentChar }) => {
  return (
    <div className="list">
      {charData.map((char) => (
        <ListItem
          key={char.id}
          char={char}
          currentChar={currentChar}
          setCurrentChar={setCurrentChar}
        />
      ))}
    </div>
  );
};
