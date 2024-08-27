import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const ProductsCard = ({ productsItem, addToCart }) => {
  return (
    <NavLink
      to={`/single-product/${productsItem.id}`}
      key={productsItem.id}
      className="relative  mx-auto  flex w-[180px]  h-[280px] md:w-full md:h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md "
    >
      <div
        className="relative mx-3 mt-3  h-60 overflow-hidden  rounded-xl"
        href="#"
      >
        <img
          className="object-cover object-center  "
          src={productsItem.thumbnail}
          alt="product image"
          loading="lazy"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-base md:text-xl tracking-tight text-slate-900">
          {productsItem.title}
        </h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl md:text-3xl font-bold text-slate-900">
              ${productsItem.price}
            </span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
        </div>
        <button
          onClick={() => addToCart(productsItem)}
          className="flex items-center justify-center rounded bg-slate-900 px-2 py-1 md:px-5 md:py-2.5 text-center text-sm md:font-medium text-white hover:bg-gray-700 gap-2"
        >
          <span className="text-xl">
            <AiOutlineShoppingCart />
          </span>
          Add to cart
        </button>
      </div>
    </NavLink>
  );
};

export default ProductsCard;
