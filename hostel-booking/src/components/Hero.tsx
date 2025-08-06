import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find your perfect hostel room today!</h1>
            <p>Affordable, verified, and traveler-friendly accommodations.</p>
            <button className="btn btn-primary hero-btn">Explore Hostels</button>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern hostel room with clean design" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;