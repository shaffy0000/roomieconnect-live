import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "shaffyshafiq@gmail.com",
      link: "mailto:shaffyshafiq@gmail.com",
      linkText: "Send Email"
    },
    {
      icon: "fas fa-globe", 
      title: "Website",
      content: "www.desifusionfood.co.uk",
      link: "http://www.desifusionfood.co.uk",
      linkText: "Visit Website"
    },
    {
      icon: "fas fa-briefcase",
      title: "Fiverr", 
      content: "Professional Services",
      link: "#",
      linkText: "View Gigs"
    }
  ];

  const socialLinks = [
    { handle: "@quranic.verse", link: "#" },
    { handle: "@islamic_talkz", link: "#" },
    { handle: "@motivation_hub", link: "#" },
    { handle: "@horror_stories", link: "#" },
    { handle: "@cartoon_world", link: "#" }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <i className={info.icon}></i>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
                <a 
                  href={info.link} 
                  className="contact-link"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {info.linkText}
                </a>
              </div>
            ))}
          </div>
          
          <div className="social-links">
            <h3>Follow My Instagram Pages</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className="social-link">
                  <i className="fab fa-instagram"></i>
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;