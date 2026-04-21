import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from "../data/products.js";
import './ProductDetails.css';

function ProductDetails({ addToCart, cartItems }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    const handleBuyNow = () => {
        addToCart(product);
        navigate('/cart');
    };

    if (!product) {
        return (
            <div className="product-details-container">
                <div className="not-found">
                    <h2>Product Not Found</h2>
                    <p>Please check the product ID and try again.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="product-details-container">
            <div className="product-details-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Back to Products
                </button>
            </div>

            <div className="product-details-content">
                <div className="product-image-section">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-main-image"
                    />
                </div>

                <div className="product-info-section">
                    <h1>{product.name}</h1>
                    <p className="product-price">Rs.{product.price.toFixed(2)}</p>
                    <p className="product-description">{product.description}</p>

                    <div className="product-meta">
                        <div className="meta-item">
                            <div className="meta-label">Product ID</div>
                            <div className="meta-value">#{product.id}</div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-label">Category</div>
                            <div className="meta-value">Essentials</div>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button 
                            className="btn btn-primary"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
