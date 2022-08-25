import React from "react";
import { Search } from "./Search";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const Sidebar = ({
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
}) => {
  return (
    <aside>
      <Search {...{ searchQuery, setSearchQuery }} />
      <List {...{ charData, currentChar, setCurrentChar }} />
      <Pagination {...{ pageData, currentPage, setCurrentPage }} />
    </aside>
  );
};
