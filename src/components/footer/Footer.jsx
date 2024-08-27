import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="border border-t-gray-200 text-black">
        <div className="footer-content px-5 py-5 ">
          <div className="w-64 md:text-left mb-3 ">
            <NavLink to={'/'} className="font-bold text-xl md:text-2xl">
              UrbanCart
            </NavLink>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:text-center  ">
            <div>
              <h3
                className="font-medium md:text-lg tracking-widest mb-3
                "
              >
                MENU
              </h3>
              <ul className="list-none mb-10">
                <li>Feature</li>
                <li>Info Center</li>
                <li>News Blog</li>
                <li>Login</li>
              </ul>
            </div>{' '}
            <div>
              <h3
                className="font-medium text-sm md:text-lg tracking-widest mb-3
                "
              >
                COMPANY
              </h3>
              <ul className="list-none mb-10">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Login</li>
              </ul>
            </div>{' '}
            <div>
              <h3
                className="font-medium text-sm md:text-lg tracking-widest mb-3
                "
              >
                CONTACT
              </h3>
              <ul className="list-none mb-10">
                <li>Contact Sales</li>
                <li>+123456789</li>
                <li>News Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>{' '}
            <div>
              <h3
                className="font-medium text-sm md:text-lg  tracking-widest mb-3
                "
              >
                TECH SUPPORT
              </h3>
              <ul className="list-none mb-10">
                <li>Contact Center</li>
                <li>Info Center</li>
                <li>Activate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 w-full  text-black">
          <div className="container  px-5 py-3 flex items-center justify-between">
            <p className="text-sm  md:text-base  gap-2 flex md:mx-4">
              &copy; 2024 UrbanCart
              <span>- All rights reserved.</span>
            </p>

            <p className="flex gap-3 text-2xl md:mx-4">
              <span>
                <FaInstagram />
              </span>
              <span>
                <CiLinkedin />
              </span>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaSquareXTwitter />
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
