import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    graduation: 0,
    pages: 0,
    projects: 0,
    age: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef(null);

  const targets = {
    graduation: 2027,
    pages: 5,
    projects: 10,
    age: 19
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 19-year-old aspiring engineer from Pakistan with a vision to contribute towards building 
              a better future for my country. My interests span from software engineering, database systems, 
              and web development to social media content creation. I believe in continuous learning and enjoy 
              exploring both technical and creative fields.
            </p>
            
            <div className="education-interests">
              <div className="education">
                <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                <p><strong>BS Computer Engineering</strong><br />COMSATS University (2023 – 2027)</p>
              </div>
              
              <div className="interests">
                <h3><i className="fas fa-lightbulb"></i> Core Interests</h3>
                <ul>
                  <li>Software Development</li>
                  <li>Databases & Data Science</li>
                  <li>Web Development (Frontend + Backend)</li>
                  <li>Social Media Content Creation</li>
                  <li>Entrepreneurship & Business</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-stats" ref={aboutRef}>
            <div className="stat-card">
              <div className="stat-number">{counters.graduation}</div>
              <div className="stat-label">Expected Graduation</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.pages}+</div>
              <div className="stat-label">Instagram Pages</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.age}</div>
              <div className="stat-label">Years Old</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;