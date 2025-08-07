import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faVenusMars, 
  faRupeeSign, 
  faComments, 
  faBrain, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: faShieldAlt,
      title: '100% Verified Profiles',
      description: 'Every user undergoes thorough verification including university enrollment, ID verification, and background checks to ensure your safety and security.',
      gradient: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-500'
    },
    {
      id: 2,
      icon: faVenusMars,
      title: 'Gender-Based Filtering',
      description: 'Respecting cultural values with sophisticated filtering options for gender-specific accommodations and roommate preferences.',
      gradient: 'from-pink-500 to-purple-600',
      iconColor: 'text-pink-500'
    },
    {
      id: 3,
      icon: faRupeeSign,
      title: 'Smart Budget Matching',
      description: 'Advanced algorithms match you with rooms and roommates within your budget range, including utilities and additional costs.',
      gradient: 'from-green-500 to-emerald-600',
      iconColor: 'text-green-500'
    },
    {
      id: 4,
      icon: faComments,
      title: 'Secure Real-Time Chat',
      description: 'Connect instantly with potential roommates through our secure messaging system with built-in safety features and moderation.',
      gradient: 'from-indigo-500 to-purple-600',
      iconColor: 'text-indigo-500'
    },
    {
      id: 5,
      icon: faBrain,
      title: 'AI-Powered Matching',
      description: 'Our intelligent system learns your preferences and lifestyle to suggest the most compatible roommates and ideal living spaces.',
      gradient: 'from-orange-500 to-red-600',
      iconColor: 'text-orange-500'
    },
    {
      id: 6,
      icon: faMapMarkerAlt,
      title: 'Location-Based Search',
      description: 'Find accommodations near your university, workplace, or preferred areas with detailed neighborhood information and transport links.',
      gradient: 'from-teal-500 to-cyan-600',
      iconColor: 'text-teal-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE ROOMIEJOIN
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-jakarta">
            Features That Make Us
            <span className="gradient-text"> Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of students trust RoomieJoin to find their perfect living space 
            and build lasting connections across Pakistan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Line (appears on hover) */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className={`w-8 h-8 ${feature.iconColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-jakarta group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jakarta">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated support team is here to help you find the perfect accommodation. 
              Get personalized assistance 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Contact Support
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;