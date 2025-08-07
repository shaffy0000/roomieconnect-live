import React from 'react';
import './App.css';

// Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
