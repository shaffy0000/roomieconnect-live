import React from 'react';
import { Search, UserPlus, Home, CreditCard } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="step-icon" />,
      title: "Sign up Student & Owners",
      description: "Students and owners register on our platform to start their housing journey"
    },
    {
      icon: <UserPlus className="step-icon" />,
      title: "Browse List & Find Room",
      description: "Browse through verified room listings and find the perfect accommodation"
    },
    {
      icon: <Home className="step-icon" />,
      title: "Book a Room at Roomie Hostel",
      description: "Select and book your preferred room directly through our platform"
    },
    {
      icon: <CreditCard className="step-icon" />,
      title: "Easy Booking and Flexible",
      description: "Flexible payment options and easy booking process with real-time availability"
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Simple steps to find and book your perfect accommodation
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;