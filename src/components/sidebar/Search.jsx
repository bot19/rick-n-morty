import React from "react";
import searchIcon from "../../assets/search.svg";
import timesIcon from "../../assets/times.svg";

// FIXME: yo, debounce this search? or it'll 404
export const Search = ({ searchQuery, setSearchQuery }) => {
  const searchIsEmpty = searchQuery === "";

  return (
    <div className="top">
      <div className="search">
        {searchIsEmpty && (
          <img src={searchIcon} className="icon-search" alt="icon search" />
        )}
        {!searchIsEmpty && (
          <img
            src={timesIcon}
            className="icon-times"
            alt="icon times"
            onClick={() => setSearchQuery("")}
          />
        )}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search here"
        />
      </div>
    </div>
  );
};
