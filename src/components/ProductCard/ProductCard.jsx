import React from 'react';
import products from "../data/products.js";
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ addToCart, cartItems }) {
    const navigate = useNavigate();

    return (
        <div className="product-card-container">
            <header className="product-card-header">
                <h1 className="product-card-title">Discover Premium Essentials</h1>
                <p className="product-card-subtitle">Quality products for your everyday needs</p>
            </header>

            <div className="products-grid">
                {products.map((product) => {
                    const isInCart = cartItems.some((item) => item.id === product.id);

                    return (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>

                            <div className="product-info">
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-price">Rs.{product.price.toFixed(2)}</p>
                                <p className="product-description">{product.description}</p>

                                <div className="product-actions">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => navigate(`/products/${product.id}`)}
                                    >
                                        View Details
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => addToCart(product)}
                                        disabled={isInCart}
                                    >
                                        {isInCart ? 'Already in Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductCard;
