import React from "react";
import NextImage from "next/image";

interface ImageProps {
  data: {
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
  };
}

const Image = ({ data }: ImageProps) => {
    return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <NextImage
        className="rounded-lg shadow-md w-full h-full object-cover"
          src={data.urls.small}
          alt={data.alt_description || "Unsplash Image"}
        width={500}
        height={300}
        />
        </a>
  );
};

export default Image;