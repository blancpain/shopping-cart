import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, model, price, image) => {
    setItems((prevState) => [...prevState, { id, model, price, image }]);
  };

  return <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>;
}

export default CartContext;
