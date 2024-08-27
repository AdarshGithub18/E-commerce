import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import img from '../../assets/login.png';

const SignUp = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const [validation, setValidation] = useState({});

  //changing the page title
  useEffect(() => {
    document.title = 'SignUp | UrbanCart';
  }, []);

  // navigation

  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const errors = {};

  const handleSubmit = () => {
    // validation for username
    if (!user.userName) {
      errors.userName = 'Please enter username';
    } else if (user.userName.length < 2) {
      errors.userName = "Username can't be only 1 character ";
    }

    // validation for email
    if (!user.email) {
      errors.email = 'Please enter email';
    } else if (!user.email.includes('@')) {
      errors.email = 'You are missing @';
    } else if (user.email.indexOf('@') == 0) {
      errors.email = "Invalid positioning of '@' ";
    } else if (
      user.email.charAt(user.email.length - 4) != '.' &&
      user.email.charAt(user.email.length - 3) != '.'
    ) {
      errors.email = "Invalid positioning of '.' ";
    }

    // validation for password
    if (!user.password) {
      errors.password = 'Enter password';
    } else if (user.password.length < 8 || user.password.length >= 15) {
      errors.password = 'password length must be between 8 to 15';
    } else if (
      !user.password.includes('@' || '$' || '%' || '#' || '!' || '&')
    ) {
      errors.password =
        'Your password should contain atleast one of these symbols @ # $ % & !';
    }

    setValidation(errors);
  };

  return (
    <Layout>
      <section className="flex flex-col  ">
        <div className=" flex my-5 flex-col items-center justify-center  px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
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
                  <div className=" flex flex-col">
                    <input
                      name="userName"
                      autoComplete="off"
                      onChange={handleInput}
                      value={user.userName}
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-black"
                      placeholder="Enter your name"
                    />
                    <p className="text-red-500 text-sm">
                      {validation ? validation.userName : ''}
                    </p>
                  </div>
                </div>{' '}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Email
                  </label>
                  <div className=" flex flex-col">
                    <input
                      name="email"
                      type="text"
                      autoComplete="off"
                      onChange={handleInput}
                      value={user.email}
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-black"
                      placeholder="Enter your email"
                    />
                    <p className="text-red-500 text-sm">
                      {validation ? validation.email : ''}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div className=" flex flex-col">
                    <input
                      name="password"
                      type="password"
                      onChange={handleInput}
                      value={user.password}
                      autoComplete="off"
                      className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-black"
                      placeholder="Enter password"
                    />
                    <p className="text-red-500 text-sm">
                      {validation ? validation.password : ''}
                    </p>
                  </div>
                </div>
                <div className="!mt-8">
                  <button
                    onClick={handleSubmit}
                    type="submit"
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
