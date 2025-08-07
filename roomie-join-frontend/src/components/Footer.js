import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faHeart, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const quickLinks = [
    { name: 'Find Rooms', href: '#' },
    { name: 'List Property', href: '#' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Pricing', href: '#' },
    { name: 'Mobile App', href: '#' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Safety Tips', href: '#' },
    { name: 'Verification Guide', href: '#' },
    { name: 'Contact Support', href: '#contact' },
    { name: 'Report Issue', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Community Guidelines', href: '#' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: faFacebook, 
      href: '#',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: faTwitter, 
      href: '#',
      color: 'hover:text-sky-500'
    },
    { 
      name: 'Instagram', 
      icon: faInstagram, 
      href: '#',
      color: 'hover:text-pink-600'
    },
    { 
      name: 'LinkedIn', 
      icon: faLinkedin, 
      href: '#',
      color: 'hover:text-blue-700'
    },
    { 
      name: 'YouTube', 
      icon: faYoutube, 
      href: '#',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section - Spans 2 columns on lg screens */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-3xl font-bold gradient-text font-jakarta">
                  RoomieJoin
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Pakistan's trusted platform for students to find safe, verified, and culturally 
                appropriate accommodation. Connecting students with perfect roommates since 2024.
              </p>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                      />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                      />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a 
                      href="mailto:support@roomiejoin.com"
                      className="text-white hover:text-primary transition-colors duration-300"
                    >
                      support@roomiejoin.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a 
                      href="tel:+923001234567"
                      className="text-white hover:text-primary transition-colors duration-300"
                    >
                      +92 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon 
                    icon={faMapMarkerAlt} 
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">Office</p>
                    <p className="text-white">
                      Lahore, Karachi, Islamabad<br />
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Get the latest updates on new features, safety tips, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-center lg:text-left">
              <p>
                © 2024 RoomieJoin. Made with{' '}
                <FontAwesomeIcon 
                  icon={faHeart} 
                  className="w-4 h-4 text-red-500 animate-heartbeat mx-1"
                />
                in Pakistan. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;