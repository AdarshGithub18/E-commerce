import React, { useContext, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { CartContext } from '../../contexts/CartContext';
import LoadingSingleProduct from '../../components/loading-card/LoadingSingleProduct';

const SingleProduct = () => {
  const { addToCart } = useContext(CartContext);

  const [singleProduct, setSingleProduct] = useState({});
  const { productID } = useParams();
  const navigateAllProducts = useNavigate();
  const [loading, setLoading] = useState(true); // Added loading state

  const getSingleProductAPI = `https://dummyjson.com/products/${productID}`;
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(getSingleProductAPI);
      setSingleProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [productID]);

  const addSingleProduct = () => {
    addToCart(singleProduct);
  };

  useEffect(() => {
    if (singleProduct.title) {
      document.title = `${singleProduct.title}`;
    }
  }, [singleProduct.title]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return loading ? (
    <LoadingSingleProduct />
  ) : (
    <section className="text-gray-600 body-font overflow-hidden flex justify-center items-center">
      <div className="container px-5 my-12 md:py-10 mx-auto">
        <button
          onClick={() => navigateAllProducts('/all-products')}
          className="flex items-center gap-1 bg-gray-50 rounded-md px-2 mb-3 py-1"
        >
          <span>
            <FaArrowLeftLong />
          </span>
          Back
        </button>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="w-[400px] h-[300px] object-cover object-center rounded"
            src={singleProduct.thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 font-semibold tracking-widest">
              {singleProduct.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {singleProduct.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {/* Star icons (add your SVGs or use a library) */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    fill={
                      index < singleProduct.rating ? 'currentColor' : 'none'
                    }
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">
                  {singleProduct.rating} ratings
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{singleProduct.description}</p>

            <div className="flex flex-col my-9">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${singleProduct.price}
              </span>
              <button
                onClick={addSingleProduct}
                className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
