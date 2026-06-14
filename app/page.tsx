"use client";

import { useState } from "react";
import Header from "../components/Header";
import SearchField from "../components/SearchField";
import Images from "../components/Images";
import useAxios from "../hooks/useAxios";
import { ImageContext } from "../contexts/Context";

export default function Page() {
  const [searchImage, setSearchImage] = useState("");
  const [page, setPage] = useState(1);

  const {
    response,
    isLoading,
    error,
    fetchData,
    totalPages,
  } = useAxios(
    `https://api.unsplash.com/search/photos?page=1&per_page=20&query=office&client_id=dOcXjWVIV44X0KWyME3R0F-Gmal_HTIHgGR1IhEibM0`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    totalPages,

    searchImage,
    setSearchImage,

    page,
    setPage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchField />
      </Header>

      <Images />
    </ImageContext.Provider>
  );
}