import React from 'react';
import { ProductProvider } from './ProductFetchingContext';
import { CartContextProvider } from './CartContext';

const ContextWrapper = ({ children }) => {
  return (
    <ProductProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ProductProvider>
  );
};

export default ContextWrapper;
