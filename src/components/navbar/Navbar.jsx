import React, { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { LuUserCircle2 } from 'react-icons/lu';
import { RiCloseLargeFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { BsCart } from 'react-icons/bs';

const Navbar = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'All Products', path: '/all-products' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Contact Us', path: '/contact-us' },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const { cart } = useContext(CartContext);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
    };
  };
  return (
    <>
      <nav className="bg-white shadow-sm z-10 p-4 flex flex-col md:flex-row md:gap-7 w-full sticky top-0">
        <div className="nav-content flex flex-row gap-8 md:mx-6 items-center justify-between w-full">
          <div className="nav-logo z-10 flex">
            <NavLink to={'/'} className="font-bold text-xl ">
              UrbanCart{' '}
            </NavLink>
          </div>
          {/* nav links */}

          <ul className="hidden md:flex gap-9 justify-center ">
            {navLinks.map((link, id) => {
              return (
                <>
                  <NavLink
                    style={navLinkStyles}
                    className={'font-medium'}
                    to={link.path}
                  >
                    {link.title}
                  </NavLink>
                </>
              );
            })}
          </ul>

          <div className="flex justify-end gap-6">
            <NavLink to={'/login'}>
              <button className="flex items-center gap-2 p-1  text-black md:px-2 md:py-1 rounded">
                <span className="text-xl">
                  <LuUserCircle2 />
                </span>
                Login
              </button>
            </NavLink>

            <button>
              <NavLink
                to={'/cart'}
                className="text-2xl relative flex items-center gap-2"
              >
                {cart.length >= 1 ? (
                  <span className="bg-black text-white absolute right-14 -top-2 px-2 py-1 rounded-full text-xs flex justify-center items-center w-4 h-4">
                    {cart.length}
                  </span>
                ) : (
                  ''
                )}

                <BsCart />
                <span className="text-lg">Cart</span>
              </NavLink>
            </button>

            <button className="md:hidden z-10 " onClick={handleMenu}>
              <span className="text-2xl font-bold ">
                {toggleMenu ? (
                  <RiCloseLargeFill size={25} />
                ) : (
                  <HiMiniBars3CenterLeft size={25} />
                )}
              </span>
            </button>

            {/* mobile menu */}

            <ul
              className={`${
                toggleMenu
                  ? 'opacity-100 flex flex-col transform translate-x-0 '
                  : 'opacity-0 transform -translate-x-full'
              }
           transition-transform absolute top-0 left-0 w-full h-screen justify-center items-center gap-10 bg-white text-xl  overflow-hidden
           `}
            >
              {navLinks.map((link, id) => {
                return (
                  <>
                    <NavLink
                      onClick={handleMenu}
                      className={'font-medium'}
                      key={id}
                      to={link.path}
                    >
                      {link.title}
                    </NavLink>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
