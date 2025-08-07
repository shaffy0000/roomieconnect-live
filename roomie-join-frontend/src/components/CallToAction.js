import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-1"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-white/15 rounded-full animate-float-2"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full animate-float-1"></div>
        <div className="absolute top-1/4 left-2/3 w-20 h-20 bg-white/20 rounded-full animate-float-2"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
            🎉 LIMITED TIME OFFER
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-jakarta leading-tight">
            Your Perfect Room is
            <br />
            <span className="text-yellow-300">Just One Click Away</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join over 5,000 verified students who found their ideal accommodation through RoomieJoin. 
            Safe, verified, and culturally appropriate housing solutions across Pakistan.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="group inline-flex items-center space-x-4 px-12 py-6 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
              <FontAwesomeIcon 
                icon={faRocket} 
                className="w-6 h-6 group-hover:animate-bounce"
              />
              <span>Start Your Journey Today</span>
            </button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <span className="font-medium">100% Free to Join</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <span className="font-medium">Verified Profiles Only</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5K+</div>
            <div className="text-white/80 text-sm">Students Joined</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1.2K+</div>
            <div className="text-white/80 text-sm">Rooms Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80 text-sm">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9★</div>
            <div className="text-white/80 text-sm">User Rating</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <span>Privacy Protected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-20 fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;