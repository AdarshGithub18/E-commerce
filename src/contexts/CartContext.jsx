import { createContext, useState } from 'react';

export const CartContext = createContext();

import { toast } from 'react-hot-toast';
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [invalidPromo, setInvalidPromo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

  // modal for checkout

  const modalFunc = () => {
    setIsOpen(!isOpen);
  };

  const allValues = {
    cart,
    setCart,
    promoCode,
    setPromoCode,
    discount,
    setDiscount,
    invalidPromo,
    setInvalidPromo,
    handleDecQuantity,
    handleIncQuantity,
    handleDiscount,
    handleRemoveItem,
    handleTotalCost,
    addToCart,
    modalFunc,
    isOpen,
  };

  return (
    <CartContext.Provider value={allValues}>{children}</CartContext.Provider>
  );
};
