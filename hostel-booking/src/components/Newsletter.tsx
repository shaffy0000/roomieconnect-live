import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">
            Get the latest updates on new hostels and special offers
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;