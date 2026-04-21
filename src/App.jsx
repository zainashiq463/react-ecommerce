import React, { useState } from 'react';
import Header from "./components/Header/Header.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import ProductCart from "./components/ProductCart/ProductCart.jsx";
import {Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((currentItems) => {
            const productExists = currentItems.some((item) => item.id === product.id);

            if (productExists) {
                return currentItems;
            }

            return [...currentItems, product];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) => 
            currentItems.filter((item) => item.id !== productId)
        );
    };

    return (
        <div className="app-shell">
            <Header cartCount={cartItems.length} />
            <Routes>
                <Route path="/" element={<ProductCard addToCart={addToCart} cartItems={cartItems} />} />
                <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} cartItems={cartItems} />} />
                <Route path="/cart" element={<ProductCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            </Routes>
        </div>
    );
}

export default App;
