import React from 'react';

const SelectCategory = ({ categories, handleFilter }) => {
  return (
    <select
      className="border bg-white outline-none flex m-4 shadow-sm text-black md:mx-5 md:my-5 px-4 py-2 rounded-md  "
      onChange={(e) => handleFilter(e.target.value)}
    >
      <option value="">filter by product</option>
      {categories
        .filter(
          (category) => !['Motorcycle', 'Vehicle'].includes(category.name)
        )
        .map((category) => {
          return <option value={category.slug}>{category.name}</option>;
        })}
    </select>
  );
};

export default SelectCategory;
