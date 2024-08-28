// LoadingCard.jsx
import React from 'react';

const LoadingCard = () => {
  return (
    <div className="grid grid-cols-2 my-10 md:grid-cols-5 gap-5 px-4">
      {Array.from({ length: 10 }).map((_, idx) => {
        return (
          <div
            key={idx}
            className="relative mx-auto flex w-[180px]  h-[280px] md:w-full md:h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="relative mx-3 mt-3 h-60 bg-gray-200 rounded-xl"></div>
            <div className="mt-4 px-5 pb-5">
              {/* Title Skeleton */}
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              {/* Price Skeleton */}
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
              {/* Button Skeleton */}
              <div className="h-10 px-2 py-1 bg-gray-200 rounded "></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingCard;
