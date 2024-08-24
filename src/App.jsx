import React from 'react';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import AllProducts from './pages/all-products/AllProducts';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="all-product" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
