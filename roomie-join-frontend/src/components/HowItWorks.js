import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faSearch, 
  faComments, 
  faKey 
} from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: 1,
      title: 'Create Profile',
      description: 'Sign up and complete your detailed profile with verification documents, preferences, and lifestyle information.',
      icon: faUserPlus,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      number: 2,
      title: 'Search & Filter',
      description: 'Use our advanced search filters to find rooms and roommates that match your budget, location, and preferences.',
      icon: faSearch,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      number: 3,
      title: 'Connect & Chat',
      description: 'Connect with potential roommates through our secure messaging system and schedule meetups or virtual tours.',
      icon: faComments,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      number: 4,
      title: 'Move In',
      description: 'Finalize agreements, complete the booking process, and move into your new home with your perfect roommate match.',
      icon: faKey,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            SIMPLE PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-jakarta">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with RoomieJoin is easy. Follow these simple steps to find your 
            perfect room and roommate in just a few minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Mobile Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary to-primary-light"></div>
                )}
                
                <div className="text-center lg:text-center">
                  {/* Animated Circle */}
                  <div className="relative mb-6 flex justify-center lg:justify-center">
                    <div className="group w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer">
                      {/* Number */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-2xl lg:text-3xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                        {step.number}
                      </span>
                      
                      {/* Rotating Border Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-20 group-hover:animate-spin transition-all duration-300 animate-spin"></div>
                    </div>

                    {/* Desktop Connection Lines */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-0"></div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center lg:justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <FontAwesomeIcon 
                        icon={step.icon} 
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-left lg:text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-jakarta">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jakarta">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already found their perfect accommodation through RoomieJoin. 
              Your ideal roommate is just a few clicks away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Create Free Account
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                Browse Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;