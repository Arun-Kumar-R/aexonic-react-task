import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './reducer';

const Cart = createContext<any | null>(null);

export const CartState = () => {
  return useContext(Cart);
};

const Context: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: []
  });
  return (
    <>
      <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    </>
  );
};

export default Context;
