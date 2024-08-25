import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="grid  grid-cols-2  my-10 md:grid-cols-5 px-4 gap-5">
        {product.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="relative  mx-auto  flex w-[180px]  h-[280px] md:w-full md:h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md "
              >
                <a
                  className="relative mx-3 mt-3  h-60 overflow-hidden  rounded-xl"
                  href="#"
                >
                  <img
                    className="object-cover object-center  "
                    src={item.thumbnail}
                    alt="product image"
                    loading="lazy"
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-base md:text-xl tracking-tight text-slate-900">
                      {item.title}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-xl md:text-3xl font-bold text-slate-900">
                        ${item.price}
                      </span>
                      <span className="text-sm text-slate-900 line-through">
                        $699
                      </span>
                    </p>
                  </div>
                  <button
                    href="#"
                    className="flex items-center justify-center rounded gap-2 bg-slate-900 px-2 py-1 md:px-5 md:py-2.5 text-center text-sm md:font-medium text-white hover:bg-gray-700 "
                  >
                    <span className="text-xl">
                      <AiOutlineShoppingCart />
                    </span>{' '}
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
