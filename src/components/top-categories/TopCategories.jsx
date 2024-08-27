import React from 'react';
import icon1 from '../../assets/basketball.webp';
import icon2 from '../../assets/book-stack.webp';
import icon3 from '../../assets/smartphone.webp';
import icon4 from '../../assets/toy.webp';
import icon5 from '../../assets/shirt.webp';
import icon6 from '../../assets/wrist-watch.webp';
import { NavLink } from 'react-router-dom';

const TopCategories = () => {
  const categories = [
    { title: 'Sports', icons: icon1 },
    { title: 'Books', icons: icon2 },
    { title: 'Electronics', icons: icon3 },
    { title: 'Toys', icons: icon4 },
    { title: 'Fashion', icons: icon5 },
    { title: 'Watches', icons: icon6 },
  ];

  return (
    <>
      <div className="heading m-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Our Top Categories
        </h1>
      </div>

      <div className="mx-5 flex flex-col justify-center items-center gap-3">
        <div className="Categories flex flex-wrap justify-center w-full gap-4 md:gap-20">
          {categories.map((category, index) => {
            return (
              <NavLink
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="border border-gray-700 rounded-full p-5  md:p-5">
                  <img
                    src={category.icons}
                    width={40}
                    alt={category.title}
                    className="object-center object-cover overflow-hidden"
                  />
                </div>
                <p className="mt-2">{category.title}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopCategories;
