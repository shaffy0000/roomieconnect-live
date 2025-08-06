import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Privacy Policy</h3>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#gdpr">GDPR</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Special Services</h3>
            <ul className="footer-links">
              <li><a href="#premium">Premium Listings</a></li>
              <li><a href="#verification">Property Verification</a></li>
              <li><a href="#insurance">Travel Insurance</a></li>
              <li><a href="#support">24/7 Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#facebook" className="social-link">
              <Facebook size={20} />
            </a>
            <a href="#twitter" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="#instagram" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#linkedin" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="#youtube" className="social-link">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; 2023 Roomie. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;