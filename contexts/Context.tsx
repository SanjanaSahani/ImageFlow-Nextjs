"use client";

import React, {
  createContext,
  ReactNode,
  useState,
} from "react";
import useAxios from "../hooks/useAxios";

interface ImageContextType {
  response: any[];
  isLoading: boolean;
  error: string;
  totalPages: number;
  fetchData: (url: string) => void;

  searchImage: string;
  setSearchImage: (value: string) => void;

  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ImageContext = createContext<ImageContextType>({
  response: [],
  isLoading: false,
  error: "",
  totalPages: 0,
  fetchData: () => {},
  searchImage: "",
  setSearchImage: () => {},
  page: 1,
  setPage: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ProviderProps) => {
  const [searchImage, setSearchImage] = useState("");
  const [page, setPage] = useState(1);

  const {
    response,
    isLoading,
    error,
    totalPages,
    fetchData,
  } = useAxios("");

  return (
    <ImageContext.Provider
      value={{
        response,
        isLoading,
        error,
        totalPages,
        fetchData,
        searchImage,
        setSearchImage,
        page,
        setPage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};