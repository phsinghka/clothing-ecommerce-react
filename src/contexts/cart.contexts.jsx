import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productsToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productsToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productsToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productsToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productsToRemove.id);
  }

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productsToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productsToRemove, quantity: 0 }];
};

const clearCartItem = (cartItems, productsToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productsToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemstoCart: () => {},
  removeItemsfromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemstoCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };
  const removeItemsfromCart = (productsToRemove) => {
    setCartItems(removeCartItem(cartItems, productsToRemove));
  };
  const clearItemFromCart = (productsToRemove) => {
    setCartItems(clearCartItem(cartItems, productsToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemstoCart,
    cartCount,
    removeItemsfromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
