import React from "react";

interface SkeletonProps {
  items: number;
}

const Skeleton = ({ items }: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-300 rounded-lg h-72"></div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;