import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <div className="logo">Beauty Store</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/product-details">Product Details</Link></li>
          <li><Link to="/feed-back">Feed Back</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;