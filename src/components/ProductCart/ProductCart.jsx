import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductCart.css';

function ProductCart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price, 0),
    [cartItems]
  );

  const itemCount = cartItems.length;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
    setOrderPlaced(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
    setShowCheckoutForm(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <button className="back-button" onClick={() => navigate('/')}>
            Back to Products
          </button>
        </div>

        <div className="empty-cart">
          <div className="empty-cart-icon">Cart</div>
          <h2>Your cart is empty</h2>
          <p>Add a few products to continue to checkout.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Products
        </button>

        <div className="cart-header-content">
          <h1 className="cart-title">Your Cart</h1>
          <p className="cart-subtitle">Review your items and place a simple order.</p>
        </div>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-items-header">
            <h2 className="cart-items-title">Cart Items ({itemCount})</h2>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />

                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">Rs.{item.price.toFixed(2)}</div>
                  <Link className="cart-item-details-btn" to={`/products/${item.id}`}>
                    View details
                  </Link>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <aside className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span className="summary-label">Items</span>
            <span className="summary-value">{itemCount}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Delivery</span>
            <span className="summary-value">Free</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Total</span>
            <span className="summary-value total-value">Rs.{subtotal.toFixed(2)}</span>
          </div>

          {!showCheckoutForm && !orderPlaced && (
            <button className="checkout-button" onClick={handleCheckoutClick}>
              Proceed to Checkout
            </button>
          )}

          {showCheckoutForm && (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <label className="checkout-label" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                className="checkout-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label className="checkout-label" htmlFor="phone">
                Gmail Address
              </label>
              <input
                id="email"
                className="checkout-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
                title="Please enter a valid Gmail address ending with @gmail.com"
                required
              />

              <label className="checkout-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                className="checkout-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03xxxxxxxxx"
                inputMode="numeric"
                maxLength="11"
                pattern="[0-9]{11}"
                title="Please enter exactly 11 digits"
                required
              />

              <label className="checkout-label" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                className="checkout-input checkout-textarea"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
                required
              />

              <button type="submit" className="checkout-button">
                Place Order
              </button>
            </form>
          )}

          {orderPlaced && (
            <div className="checkout-success">
              <h3>Order placed successfully</h3>
              <p>
                Thank you, {formData.name}. We will contact you at {formData.email} or
                {` ${formData.phone}`} before delivery.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default ProductCart;
