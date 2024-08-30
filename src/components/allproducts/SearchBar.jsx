import React, { useContext } from 'react';
import { ProductFetchingContext } from '../../contexts/ProductFetchingContext';

const SearchBar = () => {
  const { setSearchProduct, searchProduct, handleSearch } = useContext(
    ProductFetchingContext
  );

  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center max-w-lg mx-auto"
      >
        <div className="relative w-full">
          <input
            type="text"
            onChange={handleChange}
            value={searchProduct}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full ps-4 p-2.5  "
            placeholder="Search smartphones, fashion, and groceries..."
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSearch}
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-black rounded-lg border"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
