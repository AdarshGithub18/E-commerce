import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from 'react-icons/bs';

const ProductsCard = ({ productsItem }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="relative mx-auto flex w-full max-w-xs md:max-w-sm lg:max-w-md h-auto flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <NavLink
        className="relative mx-3 mt-3 h-48 md:h-60 overflow-hidden rounded-xl"
        to={`/single-product/${productsItem.id}`}
      >
        <img
          className="object-cover object-center w-full h-full"
          src={productsItem.thumbnail}
          alt="product image"
          loading="lazy"
        />
      </NavLink>
      <div className="mt-4 px-4 pb-4">
        <h5 className="text-base md:text-lg lg:text-xl tracking-tight text-slate-900">
          {productsItem.title}
        </h5>
        <div className="mt-2 mb-4 flex items-center justify-between">
          <p>
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900">
              ${productsItem.price}
            </span>
            <span className="text-sm text-slate-900 line-through ml-2">
              ${Math.floor(productsItem.price + 68)}
            </span>
          </p>
        </div>
        <button
          onClick={() => addToCart(productsItem)}
          className="flex items-center justify-center rounded bg-slate-900 px-3 py-2 text-center text-sm md:font-medium text-white hover:bg-gray-700 gap-2"
        >
          <span className="text-xl">
            <BsCartPlus />
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
