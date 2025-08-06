import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h2>Roomie</h2>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#explore">Explore Hostels</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#signin" className="btn btn-primary">Sign In</a></li>
          </ul>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;