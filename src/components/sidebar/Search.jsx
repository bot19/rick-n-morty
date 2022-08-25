import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import timesIcon from "../../assets/times.svg";

export const Search = ({ searchQuery, setSearchQuery }) => {
  // debounce search; no hitting API millions of times
  const [localQuery, setLocalQuery] = useState(searchQuery);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("localQuery", localQuery);
      setSearchQuery(localQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [localQuery]);

  const searchIsEmpty = localQuery === "";

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
            onClick={() => setLocalQuery("")}
          />
        )}
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search here"
        />
      </div>
    </div>
  );
};
