import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Shaffy Shafiq 👋";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{displayText}</h1>
            <h2 className="hero-subtitle">Computer Engineering Student | Tech Enthusiast | Digital Creator</h2>
            <p className="hero-description">
              I'm a passionate Computer Engineering student at COMSATS University, expected to graduate in 2027. 
              I specialize in software development, database systems, and creative digital projects. Alongside academics, 
              I actively manage multiple Instagram pages across diverse niches, showcasing my dedication to content 
              creation and community building.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-img-container">
                <img 
                  src="https://via.placeholder.com/300x300/667eea/ffffff?text=Shaffy+Shafiq" 
                  alt="Shaffy Shafiq" 
                  className="profile-img"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-icon" style={{'--delay': '0s'}}>
                  <i className="fab fa-python"></i>
                </div>
                <div className="floating-icon" style={{'--delay': '1s'}}>
                  <i className="fab fa-react"></i>
                </div>
                <div className="floating-icon" style={{'--delay': '2s'}}>
                  <i className="fas fa-database"></i>
                </div>
                <div className="floating-icon" style={{'--delay': '3s'}}>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;