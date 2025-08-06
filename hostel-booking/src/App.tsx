import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedRooms from './components/FeaturedRooms';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <FeaturedRooms />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
