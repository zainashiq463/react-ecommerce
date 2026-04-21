import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          🛍️ EssentialsHub
        </div>

        <nav className="navbar-nav">
          <button className="nav-link" onClick={() => navigate('/')}>
            Products
          </button>
          <button className="nav-link" onClick={() => navigate('/cart')}>
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
