"use client";

import React, { useContext } from "react";
import { ImageContext } from "../contexts/Context";
import Image from "./Image";
import Skeleton from "./Skeleton";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center font-semibold mt-6 underline text-2xl">
        Results for {searchImage || "Images"}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Skeleton items={10} />
        ) : (
          response.map((data: any, key: number) => (
            <Image key={key} data={data} />
          ))
        )}
      </div>
    </>
  );
};

export default Images;