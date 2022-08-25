import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/sidebar";
import { Page } from "./components/Page";

function App() {
  // TODO: many states, useReducer?
  const [charData, setcharData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [currentChar, setCurrentChar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // get data here
  const getApiData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchQuery}`
    ).then((response) => response.json());
    // TODO: handle error

    // update the state; TODO: IF response; handle !response
    setcharData(response?.results);
    setPageData(response?.info);
  };

  // get data on init / update data on conditions
  useEffect(() => {
    getApiData();
  }, [currentPage, searchQuery]);

  return (
    <>
      <Sidebar
        {...{
          charData,
          setcharData,
          pageData,
          setPageData,
          currentChar,
          setCurrentChar,
          currentPage,
          setCurrentPage,
          searchQuery,
          setSearchQuery,
        }}
      />
      <Page currentChar={currentChar} />
    </>
  );
}

export default App;

/**
 * TODO: don't mount Page at all if mobile
 * TODO: finish styling ...got bored
 */
