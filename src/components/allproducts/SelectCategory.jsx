import React from 'react';

const SelectCategory = ({ categories, handleFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {categories.map((category) => {
        return (
          <>
            <div key={category.id} className="border ">
              <button
                onClick={() => handleFilter(category)}
                className="border  flex bg-black text-white "
              >
                {category.name}
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SelectCategory;
