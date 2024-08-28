import React, { useContext, useEffect } from 'react';

import { MdOutlineDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { BiRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import { CartContext } from '../../contexts/CartContext';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Cart = () => {
  const {
    cart,

    promoCode,
    setPromoCode,

    invalidPromo,

    handleDecQuantity,
    handleIncQuantity,
    handleDiscount,
    handleTotalCost,
    handleRemoveItem,
  } = useContext(CartContext);
  //changing the page title
  useEffect(() => {
    document.title = 'Shopping Cart | UrbanCart';
  }, []);

  const navigateProduct = useNavigate();

  return (
    <section className="w-[90% ] mx-auto relative z-0 after:contents-[''] after:absolute after:z-0 my-4 after:h-full xl:after:w-1/3 after:top-0 after:right-0 ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                {cart.length} Items
              </h2>
            </div>
            {/* Header for Product Details, Quantity, and Total */}
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            {cart.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col min-[500px]:md:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group"
                >
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src={product.thumbnail}
                      alt="Product image"
                      className="mx-auto rounded-xl"
                    />
                  </div>

                  <div className="grid relative grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col items-center md:items-start gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          {product.title}
                        </h6>

                        <h6 className="font-normal text-base leading-7 text-gray-500">
                          brand: {product.brand}
                        </h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">
                          {product.category}
                        </h6>
                        <h6 className="font-medium text-base leading-7  text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                          ${product.price}
                        </h6>
                      </div>
                    </div>

                    <div className="flex items-center max-[500px]: justify-center md:justify-start h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button
                          onClick={() => handleDecQuantity(product.id)}
                          className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                        >
                          -
                        </button>
                        <p className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent">
                          {product.quantity}
                        </p>
                        <button
                          onClick={() => handleIncQuantity(product.id)}
                          className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove item Button */}
                    <div className="absolute right-1 ">
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        className="text-red-500 text-2xl hover:text-red-700 font-semibold"
                      >
                        <MdOutlineDelete />
                      </button>
                    </div>

                    <div className="flex items-center justify-center md:justify-end md:mr-10  max-md:mt-3 h-full">
                      <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-gray-600">
                        ${Math.floor(product.price * product.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <button
              onClick={() => navigateProduct('/all-product')}
              className="mt-5 flex gap-2 items-center"
            >
              <span>
                <FaArrowLeftLong />
              </span>
              Continue Shopping
            </button>
          </div>

          {/* order summary section */}

          <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full h-fit max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:px-8  py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">
                  {cart.length} Items
                </p>
                <p className="font-medium text-lg leading-8 text-black">{}</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">
                  Shipping
                </label>
                <div className="flex pb-6">
                  <div className="relative w-full">
                    <div className="absolute left-0 top-0 py-3 px-4">
                      <span className="font-normal text-base text-gray-300">
                        Second Delivery
                      </span>
                    </div>
                    <input
                      type="text"
                      className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                      placeholder="$5.00"
                    />
                  </div>
                </div>
                <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                  Promo Code
                </label>
                <div className="flex pb-4 w-full">
                  <div className="relative w-full">
                    <div className="absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                    <input
                      type="text"
                      className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400"
                      placeholder="xxxx xxxx xxxx"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />

                    <p className="text-red-600  my-1">{invalidPromo}</p>

                    <button
                      onClick={handleDiscount}
                      className="btn-primary font-semibold my-1 w-full bg-black text-white rounded-md py-1"
                    >
                      Apply Promo Code
                    </button>
                    <p className="my-2">
                      Use <span className="font-bold">DISCOUNT20</span> to get
                      20% discount
                    </p>
                  </div>
                </div>
              </form>
              <div className="flex items-center justify-between pt-1 border-t border-gray-200">
                <p className="font-normal text-lg leading-8 text-black">
                  Total Price
                </p>
                <p className="font-bold text-lg leading-8 text-black">
                  ${Math.floor(handleTotalCost())}
                </p>
              </div>
              <div className="w-full pt-5">
                <button className="btn-primary w-full bg-black text-white rounded-md py-1">
                  <span className="font-semibold text-base leading-8 ">
                    Continue to Payment
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
