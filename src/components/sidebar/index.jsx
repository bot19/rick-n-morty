import React from "react";
import { Search } from "./Search";
import { List } from "./List";
import { Pagination } from "./Pagination";

export const Sidebar = () => {
  return (
    <aside>
      <Search />
      <List />
      <Pagination />
    </aside>
  );
};
