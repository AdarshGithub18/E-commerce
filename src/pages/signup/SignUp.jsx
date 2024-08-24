import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import img from '../../assets/login.png';
import banner from '../../assets/login-banner.png';

const SignUp = () => {
  return (
    <Layout>
      <section className="flex flex-col  ">
        <div className="m-5 w-fit">
          <img src={banner} className="rounded-xl w-full h-[50%] " alt="" />
        </div>
        <div className=" flex my-5 flex-col items-center justify-center  px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-extrabold">
                    Sign Up
                  </h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Sign up to view your saved items and enjoy a seamless
                    shopping experience
                  </p>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Name
                  </label>
                  <div className=" flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-black"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>{' '}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Email
                  </label>
                  <div className=" flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-black"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div className=" flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-black"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="!mt-8">
                  <button
                    type="button"
                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-black hover:bg-gray-700 focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-sm !mt-8 text-center text-gray-800">
                  Do you have an account{' '}
                  <NavLink
                    to={'/login'}
                    className="text-black font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Login Here
                  </NavLink>
                </p>
              </form>
            </div>
            <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
              <img
                src={img}
                className="w-full hidden h-full max-md:w-4/5 mx-auto md:block object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
