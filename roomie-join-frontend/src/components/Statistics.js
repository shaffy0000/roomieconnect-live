import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserCheck, 
  faHome, 
  faHandshake, 
  faCity 
} from '@fortawesome/free-solid-svg-icons';

const Statistics = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      number: 5000,
      suffix: '+',
      label: 'Verified Students',
      icon: faUserCheck,
      color: 'text-blue-500'
    },
    {
      id: 2,
      number: 1200,
      suffix: '+',
      label: 'Available Rooms',
      icon: faHome,
      color: 'text-green-500'
    },
    {
      id: 3,
      number: 3500,
      suffix: '+',
      label: 'Successful Matches',
      icon: faHandshake,
      color: 'text-purple-500'
    },
    {
      id: 4,
      number: 15,
      suffix: '+',
      label: 'Cities',
      icon: faCity,
      color: 'text-orange-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const AnimatedCounter = ({ targetNumber, suffix, hasStarted }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!hasStarted) return;

      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames
      const increment = targetNumber / steps;
      let current = 0;
      let stepCount = 0;

      const timer = setInterval(() => {
        stepCount++;
        current += increment;
        
        if (stepCount >= steps) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [targetNumber, hasStarted]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-gray-900">
        {currentNumber.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-jakarta">
              Trusted by Thousands of Students
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our growing community of verified students and property owners across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                    <FontAwesomeIcon 
                      icon={stat.icon} 
                      className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>
                
                <div className="mb-2">
                  <AnimatedCounter 
                    targetNumber={stat.number}
                    suffix={stat.suffix}
                    hasStarted={hasAnimated}
                  />
                </div>
                
                <p className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Verified Profiles</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
              <div className="space-y-2 col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-primary">4.8★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;