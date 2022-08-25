import React from "react";

export const ListItem = () => {
  return (
    <div className="item">
      <div className="item__highlight" />
      <img
        src="https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png"
        alt="thumb"
        className=""
      />
      <div>
        <h3>name</h3>
        <div>
          <b>Location:</b> location
        </div>
        <div>
          <b>Species:</b> species
        </div>
      </div>
    </div>
  );
};
