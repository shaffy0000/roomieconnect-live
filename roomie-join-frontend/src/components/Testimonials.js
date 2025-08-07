import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Areeba Khan',
      role: 'Computer Science Student',
      institution: 'LUMS, Lahore',
      avatar: 'AK',
      rating: 5,
      text: 'RoomieJoin made finding accommodation so much easier! The verification process gave me confidence, and I found an amazing roommate who became my best friend. Highly recommend for all female students!',
      bgGradient: 'from-pink-400 to-purple-500'
    },
    {
      id: 2,
      name: 'Mrs. Rafiq',
      role: 'Property Owner',
      institution: 'Islamabad',
      avatar: 'MR',
      rating: 5,
      text: 'As a property owner, I love how RoomieJoin ensures all tenants are verified students. The platform helped me find responsible tenants quickly. بہت اچھا سروس ہے! (Very good service!)',
      bgGradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 3,
      name: 'Fatima Siddiqui',
      role: 'Medical Student',
      institution: 'Karachi University',
      avatar: 'FS',
      rating: 5,
      text: 'Safety was my biggest concern, but RoomieJoin\'s gender-based filtering and verification made me feel secure. Found a great place near my university with amazing roommates!',
      bgGradient: 'from-green-400 to-teal-500'
    },
    {
      id: 4,
      name: 'Ahmad Hassan',
      role: 'Engineering Student',
      institution: 'UET, Lahore',
      avatar: 'AH',
      rating: 5,
      text: 'بہترین پلیٹ فارم! (Best platform!) The AI matching was spot-on - found roommates with similar study habits and interests. Budget filtering helped me stay within my means.',
      bgGradient: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      name: 'Zainab Ali',
      role: 'MBA Student',
      institution: 'IBA, Karachi',
      avatar: 'ZA',
      rating: 5,
      text: 'The chat feature is excellent for getting to know potential roommates before meeting. Found my accommodation in just 3 days! The process was smooth and professional.',
      bgGradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 6,
      name: 'Usman Malik',
      role: 'Business Student',
      institution: 'FAST, Islamabad',
      avatar: 'UM',
      rating: 5,
      text: 'Location-based search was incredibly helpful. Found a place exactly 10 minutes from my university. The verification process builds trust among users. Great job!',
      bgGradient: 'from-teal-400 to-cyan-500'
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            WHAT OUR USERS SAY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-jakarta">
            Real Stories from
            <span className="gradient-text"> Real Students</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how RoomieJoin has helped thousands of students across Pakistan 
            find their perfect accommodation and build lasting friendships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <FontAwesomeIcon 
                  icon={faQuoteLeft} 
                  className="w-12 h-12 text-primary"
                />
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.bgGradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>

                {/* User Details */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.institution}
                  </p>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center">
                <StarRating rating={5} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Successful Matches</div>
              <div className="text-sm text-gray-500">Within 7 days</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24hrs</div>
              <div className="text-gray-600">Average Response Time</div>
              <div className="text-sm text-gray-500">Customer support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-jakarta">
            Ready to Share Your Success Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied students who found their perfect accommodation through RoomieJoin.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;