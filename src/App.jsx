import React, { useState } from 'react';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import AllProducts from './pages/all-products/AllProducts';

const App = () => {
  const [cart, setCart] = useState([]);

  // increasing the quantity of product
  const handleIncQuantity = (id) => {
    const increaseQuantity = cart.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    setCart(increaseQuantity);
  };

  // decreasing the quantity of product

  const handleDecQuantity = (id) => {
    const decreaseQuantity = cart.map((item) => {
      return item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item;
    });
    setCart(decreaseQuantity);
  };

  const addToCart = (productItem) => {
    const isProductExist = cart.find(
      (findItem) => findItem.id === productItem.id
    );

    // updating same product quantity
    if (isProductExist) {
      const quantityAdding = cart.map((item) =>
        item.id === productItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(quantityAdding);
    } else {
      setCart([...cart, { ...productItem, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (id) => {
    const deletedItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(deletedItem);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleDecQuantity={handleDecQuantity}
                handleIncQuantity={handleIncQuantity}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="all-product"
            element={<AllProducts addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
