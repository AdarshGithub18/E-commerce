import React, { useState } from 'react';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import AllProducts from './pages/all-products/AllProducts';
import toast, { Toaster } from 'react-hot-toast';
import SingleProduct from './pages/single-product/SingleProduct';
import ContactUs from './pages/contact/ContactUs';
import AboutUs from './pages/about/AboutUs';

const App = () => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [invalidPromo, setInvalidPromo] = useState('');
  const [userName, setUserName] = useState('');

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
    toast.success('product added to cart');
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

  // handleing remove item

  const handleRemoveItem = (id) => {
    const deletedItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(deletedItem);
  };

  // handling total cost

  const handleTotalCost = () => {
    const totalCost = cart.reduce((total, productItem) => {
      return Math.floor(total + productItem.price * productItem.quantity);
    }, 0);
    return totalCost - discount;
  };

  // promo code

  const handleDiscount = () => {
    if (promoCode === 'DISCOUNT20') {
      setDiscount(handleTotalCost() * 0.2);
      setPromoCode('');
    } else {
      setInvalidPromo('INVALID PROMO CODE');
    }
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
                handleTotalCost={handleTotalCost}
                handleDiscount={handleDiscount}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                invalidPromo={invalidPromo}
              />
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="sign-up"
            element={<SignUp setUserName={setUserName} userName={userName} />}
          />
          <Route
            path="all-product"
            element={<AllProducts addToCart={addToCart} />}
          />
          <Route
            path="single-product/:productID"
            element={<SingleProduct addToCart={addToCart} />}
          />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
