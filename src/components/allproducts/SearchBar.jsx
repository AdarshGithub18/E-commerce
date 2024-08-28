import React, { useContext } from 'react';
import { ProductFetchingContext } from '../../contexts/ProductFetchingContext';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  const { handleSearch, searchProduct } = useContext(ProductFetchingContext);
  return (
    <>
      <div className="flex rounded-md border-2 border-black overflow-hidden  max-w-md mx-auto ">
        <input
          type="email"
          value={searchProduct}
          onChange={handleSearch}
          placeholder="Mobile , Laptop , Meckup , Groceries "
          className=" outline-none w-full bg-white text-gray-600 text-sm px-4 py-3"
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
