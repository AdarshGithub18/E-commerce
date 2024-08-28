import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const LoadingSingleProduct = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden flex justify-center items-center animate-pulse">
      <div className="container px-5 my-12 md:py-24 mx-auto">
        <button className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1">
          <span>
            <FaArrowLeftLong />
          </span>
          Back
        </button>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Skeleton Image */}
          <div className="w-[400px] h-[300px] bg-gray-300 rounded"></div>

          {/* Skeleton Text */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>

            {/* Skeleton Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-gray-300 rounded-full mr-1"
                ></div>
              ))}
              <div className="h-4 bg-gray-300 rounded w-1/4 ml-3"></div>
            </div>

            <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-5/6 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-4/6 mb-4"></div>

            {/* Skeleton Button */}
            <div className="flex flex-col my-9">
              <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
              <div className="h-10 ml-auto  bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSingleProduct;
