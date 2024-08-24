import React from 'react';
import icon1 from '../../assets/basketball.png';
import icon2 from '../../assets/book-stack.png';
import icon3 from '../../assets/smartphone.png';
import icon4 from '../../assets/toy.png';
import icon5 from '../../assets/tshirt.png';
import icon6 from '../../assets/wrist-watch.png';
import { NavLink } from 'react-router-dom';

const TopCategories = () => {
  const categories = [
    { titile: 'Sports', icons: icon1 },
    { titile: 'Books', icons: icon2 },
    { titile: 'Electronics', icons: icon3 },
    { titile: 'Toys', icons: icon4 },
    { titile: 'fashion', icons: icon5 },
    { titile: 'Watches', icons: icon6 },
  ];
  return (
    <>
      <div className="heading mx-5">
        <h1 className="fsm:text-3xl text-2xl font-medium title-font text-gray-900">
          Our Top Categories
        </h1>
      </div>

      <div className="mx-5 flex flex-col justify-between items-center gap-3">
        <div className="Categories flex flex-wrap md:flex-row md:gap-20 justify-center w-full ">
          {categories.map((category) => {
            return (
              <>
                <NavLink className=" flex flex-col ">
                  <div className="border border-gray-700 rounded-full p-5 ">
                    <img
                      src={category.icons}
                      width={50}
                      alt=""
                      className="object-center overflow-hidden "
                    />
                  </div>
                  <div className="flex gap-8 text-center">
                    <p>{category.titile}</p>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopCategories;
