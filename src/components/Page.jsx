import React from "react";

// FIXME: long episode list not producing y-scroll, what?
export const Page = ({ currentChar }) => {
  const { gender, episode, image, location, name, species, status } =
    currentChar || {};

  if (!currentChar)
    return (
      <main>
        <header>
          <h1>Yo.</h1>
          <h2>Select a character to see more info.</h2>
        </header>
      </main>
    );

  return (
    <main>
      <header>
        <h1>{name}</h1>
        <h2>{location.name}</h2>
      </header>
      <section>
        <div className="left">
          <img src={image} alt={`thumbnail of ${name}`} />
          <div className="info">
            <div>
              <b>species</b> {species}
            </div>
            <div>
              <b>status</b> {status}
            </div>
            <div>
              <b>gender</b> {gender}
            </div>
          </div>
        </div>
        <div className="right">
          <b>episodes</b>
          {episode.map((ep) => {
            return <div key={ep}>{ep}</div>;
          })}
        </div>
      </section>
    </main>
  );
};
