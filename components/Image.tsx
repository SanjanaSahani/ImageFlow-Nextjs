import React from "react";
import NextImage from "next/image";

interface ImageProps {
  data: {
    id: string;
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
  };
}

const Image = ({ data }: ImageProps) => {
  return (
    <a
      href={data.urls.regular}
      target="_blank"
      rel="noreferrer"
    >
      <NextImage
        src={data.urls.small}
        alt={
          data.alt_description ||
          "Unsplash Image"
        }
        width={500}
        height={300}
        className="rounded-lg shadow-md w-full h-full object-cover"
      />
    </a>
  );
};

export default Image;