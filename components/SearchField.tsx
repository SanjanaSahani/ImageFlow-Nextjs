"use client";

import { useContext, useState, KeyboardEvent } from "react";
import { ImageContext } from "../contexts/Context";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");

  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleSearch = () => {
    if (!searchValue) return;

    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=dOcXjWVIV44X0KWyME3R0F-Gmal_HTIHgGR1IhEibM0`;

    fetchData(url);
    setSearchImage(searchValue);
    setSearchValue("");
  };

  const handleEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex">
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnterSearch}
        placeholder="Search Anything..."
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
      />

      <button
        onClick={handleSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;