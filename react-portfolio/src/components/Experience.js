import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Content Creator (Instagram)",
      period: "2022 - Present",
      description: "Managing multiple pages, building organic growth and engagement strategies across diverse niches including Islamic, Motivational, Horror, and Cartoon content.",
      skills: ["Social Media Strategy", "Content Planning", "Audience Engagement"]
    },
    {
      title: "Freelancer (Fiverr)",
      period: "2023 - Present", 
      description: "Offering Instagram management and growth services to clients, helping businesses and individuals expand their social media presence.",
      skills: ["Client Management", "Growth Services", "Analytics"]
    },
    {
      title: "Student Developer",
      period: "2023 - Present",
      description: "Developing academic and personal software/web projects, focusing on practical applications of computer engineering concepts.",
      skills: ["Full-Stack Development", "Database Design", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span className="timeline-date">{exp.period}</span>
                <p>{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;