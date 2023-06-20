import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, model, price, image, quantity = 1) => {
    const newItem = { id, model, price, image, quantity };
    const itemExists = items.some((item) => item.id === id);

    // if the item exists update its quantity, otherwise add it
    if (itemExists) {
      const updatedItems = items.map((item) => {
        if (id === item.id) {
          const newQuantity = item.quantity + 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setItems(updatedItems);
    } else {
      setItems((prevState) => [...prevState, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const itemExists = items.some((item) => item.id === id);

    if (itemExists) {
      const updatedItems = items.map((item) => {
        if (id === item.id) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      // if any items have become 0 or lower quantity - remove them
      const finalItems = updatedItems.filter((item) => item.quantity > 0);
      setItems(finalItems);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, quantity: Number(newQuantity) };
      }
      return item;
    });
    const finalItems = updatedItems.filter((item) => item.quantity > 0);
    setItems(finalItems);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
