import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline-block', marginRight: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '20px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        <li style={{ display: 'inline-block', marginRight: '20px' }}>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>
            Services
          </Link>
        </li>
        <li style={{ display: 'inline-block' }}>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;