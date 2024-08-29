import React, { useContext } from 'react';
import { ProductFetchingContext } from '../../contexts/ProductFetchingContext';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <>
      <div className="flex w-[600px] rounded-md border-2  overflow-hidden  max-w-md mx-auto ">
        <input
          type="text"
          placeholder="Mobile , Laptop , Meckup , Groceries "
          className=" w-[600px] outline-none  bg-white text-gray-600 text-sm px-4 py-3"
        />
        <button
          type="button"
          className="flex items-center justify-center bg-black px-5"
        >
          <span className="text-white text-xl font-bold">
            <CiSearch />
          </span>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
