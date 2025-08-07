import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setAnswer(`Great question! For "${question}", I recommend starting with our verified listings in your preferred area. Our smart matching system will help you find the perfect roommate based on your preferences, budget, and lifestyle. Would you like me to show you available rooms in a specific city?`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary-light/30 rounded-full animate-float-1"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary-light/20 to-primary/30 rounded-full animate-float-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-jakarta leading-tight">
            Find Your Perfect{' '}
            <span className="gradient-text">
              Room & Roommate
            </span>
            {' '}with Roomie
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with verified students, discover safe accommodations, and build lasting friendships. 
            Your journey to the perfect living space starts here.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
              <span>Find a Room</span>
            </button>
            <button className="group px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
              <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
              <span>List Your Room</span>
            </button>
          </div>

          {/* AI Assistant Form */}
          <div className="max-w-2xl mx-auto">
            <div className="glassmorphism rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-jakarta">
                Ask Our AI Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant answers about finding roommates, room requirements, or area recommendations
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask me anything about finding accommodation..."
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 placeholder-gray-500 bg-white/80"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !question.trim()}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FontAwesomeIcon 
                      icon={faPaperPlane} 
                      className={`w-4 h-4 ${isLoading ? 'animate-pulse' : ''}`}
                    />
                  </button>
                </div>
              </form>

              {/* AI Response */}
              {(answer || isLoading) && (
                <div className="mt-6 p-4 bg-white/60 rounded-xl border border-gray-100">
                  {isLoading ? (
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                      <span className="text-gray-600">AI is thinking...</span>
                    </div>
                  ) : (
                    <div className="text-gray-700 leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">AI</span>
                        </div>
                        <p>{answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;