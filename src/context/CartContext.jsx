import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Create Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;