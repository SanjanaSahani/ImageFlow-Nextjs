"use client";

import { useContext } from "react";
import { ImageContext } from "../contexts/Context";

const Pagination = () => {
  const {
    page,
    setPage,
    totalPages,
    searchImage,
    fetchData,
  } = useContext(ImageContext);

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    setPage(newPage);

    fetchData(
      `https://api.unsplash.com/search/photos?page=${newPage}&per_page=20&query=${searchImage}&client_id=dOcXjWVIV44X0KWyME3R0F-Gmal_HTIHgGR1IhEibM0`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show max 10 page buttons at a time
  const startPage = Math.max(1, page - 4);
  const endPage = Math.min(totalPages, startPage + 9);

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 my-8">
      <button
        onClick={() => changePage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:bg-gray-400"
      >
        Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => changePage(pageNumber)}
          className={`px-4 py-2 rounded ${
            page === pageNumber
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => changePage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;