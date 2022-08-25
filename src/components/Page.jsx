import React from "react";

export const Page = ({ currentChar }) => {
  return (
    <main>
      <header>
        <h1>name that is really long and shouldn't wrap</h1>
        <h2>location that is also really long and shouldn't wrap</h2>
      </header>
      <section>
        <div className="left">
          <img
            src="https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png"
            alt="thumb"
            className=""
          />
          <div className="info">
            <div>
              <b>species</b> species
            </div>
            <div>
              <b>species</b> species
            </div>
            <div>
              <b>species</b> species
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <b>episodes</b> episodes
          </div>
        </div>
      </section>
    </main>
  );
};
