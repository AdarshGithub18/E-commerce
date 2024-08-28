import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from 'react-icons/bs';

const ProductsCard = ({ productsItem }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      key={productsItem.id}
      className="relative  mx-auto  flex w-[180px]  h-[280px] md:w-full md:h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md "
    >
      <NavLink
        className="relative mx-3 mt-3  h-60 overflow-hidden  rounded-xl"
        to={`/single-product/${productsItem.id}`}
      >
        <img
          className="object-cover object-center  "
          src={productsItem.thumbnail}
          alt="product image"
          loading="lazy"
        />
      </NavLink>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-base md:text-xl tracking-tight text-slate-900">
          {productsItem.title}
        </h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl md:text-3xl font-bold text-slate-900">
              ${productsItem.price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${Math.floor(productsItem.price + 68)}
            </span>
          </p>
        </div>
        <button
          onClick={() => addToCart(productsItem)}
          className="flex items-center justify-center rounded bg-slate-900 px-2 py-1 md:px-5 md:py-2.5 text-center text-sm md:font-medium text-white hover:bg-gray-700 gap-2"
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
