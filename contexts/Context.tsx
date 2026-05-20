import React, { createContext, ReactNode } from "react";

interface ImageContextType {
  response: any[];
  isLoading: boolean;
  error: string;
  fetchData: (url: string) => void;
  searchImage: string;
  setSearchImage: (value: string) => void;
}

export const ImageContext = createContext<ImageContextType>({
  response: [],
  isLoading: false,
  error: "",
  fetchData: () => {},
  searchImage: "",
  setSearchImage: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ProviderProps) => {
  return (
    <ImageContext.Provider value={{} as ImageContextType}>
      {children}
    </ImageContext.Provider>
  );
};