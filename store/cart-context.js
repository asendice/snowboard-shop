import React, { useContext, useState,  } from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}
export function useCartUpdate() {
  return useContext(CartUpdateContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  function updateCart(action, item) {
    if (action === "add") {
      setCart((prevCart) => [...prevCart, item]);
      return;
    }
    if (action === "delete") {
      setCart((prevCart) => prevCart.filter((itm) => itm._id !== item._id));
      return;
    }
    if (action === "edit") {
      setCart((prevCart) => [
        ...prevCart.filter((itm) => itm._id !== item._id),
        item,
      ]);
      return;
    }
  }

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  );
}
