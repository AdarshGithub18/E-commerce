import React from 'react';
import emptyCart from '../../assets/Empty-cart.svg';
const EmptyCart = () => {
  return (
    <div className="text-center my-3 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">
        Oops! Looks Like You Forgot to Shop!
      </h1>
      <p>Time to add some goodies to your cart.</p>
      <img src={emptyCart} className="w-[400px] h-[300px]" alt="" />
    </div>
  );
};

export default EmptyCart;
