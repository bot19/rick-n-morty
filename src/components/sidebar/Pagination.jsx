import React from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

// FIXME: possible to pass last page +1 & crash app from super fast click spam
export const Pagination = ({ pageData, currentPage, setCurrentPage }) => {
  const { next, pages, prev } = pageData || {};

  return (
    <div className="pagination">
      <button
        disabled={!prev}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        <img src={arrowLeft} className="icon-arrow" alt="icon left arrow" />
      </button>
      <span>
        Page {currentPage}/{pages}
      </span>
      <button
        disabled={!next}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        <img src={arrowRight} className="icon-arrow" alt="icon right arrow" />
      </button>
    </div>
  );
};
