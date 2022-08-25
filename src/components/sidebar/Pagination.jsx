import React from "react";

// FIXME: if you spam next fast enough, it is possible to go to last page +1 & crash app ...lol :D
// TODO: nice prev/next icons
export const Pagination = ({ pageData, currentPage, setCurrentPage }) => {
  const { next, pages, prev } = pageData || {};

  return (
    <div className="pagination">
      <button
        disabled={!prev}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        prev
      </button>
      <span>
        Page {currentPage}/{pages}
      </span>
      <button
        disabled={!next}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        next
      </button>
    </div>
  );
};
