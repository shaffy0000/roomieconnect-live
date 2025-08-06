import React from 'react';
import { Shield, MessageCircle, Users, Building } from 'lucide-react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="feature-icon" />,
      title: "Safe & Verified",
      description: "All safety and security checks done, feel safe at your stay."
    },
    {
      icon: <MessageCircle className="feature-icon" />,
      title: "Live Chat with Hostel Owners",
      description: "Connect through chat with real time chat between owners and tenants."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Room Reviewed by Students",
      description: "Authenticate rooms from detailed reviews by independent reviewers."
    },
    {
      icon: <Building className="feature-icon" />,
      title: "Secure Bookings",
      description: "Safe and secure booking experience with verified properties."
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          We offer a range of features to make your student housing experience easy and secure.
        </p>
        
        <div className="features-grid grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;