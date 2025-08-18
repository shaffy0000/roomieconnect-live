import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: "fas fa-code",
      skills: ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "React", "Flask", "SQL", "Supabase", "MS SQL Server"]
    },
    {
      title: "Tools & Technologies", 
      icon: "fas fa-tools",
      skills: ["GitHub", "VS Code", "PyCharm", "Canva", "CapCut", "Version Control"]
    },
    {
      title: "Other Expertise",
      icon: "fas fa-star", 
      skills: ["Social Media Management", "Content Creation", "Business Ideation", "Brand Creation", "Instagram Growth", "Digital Marketing"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;