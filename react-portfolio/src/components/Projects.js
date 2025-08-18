import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "📘 RoomieConnect",
      description: "A complete student portal built with Flask + Supabase, featuring dashboards, grade tracking, AI-powered GPA prediction, and chatbot integration.",
      image: "https://via.placeholder.com/400x250/4F46E5/ffffff?text=RoomieConnect",
      technologies: ["Flask", "Supabase", "Python", "AI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "🏠 RentMate Lite", 
      description: "A house rental management system using HTML, Python, and Supabase backend for efficient property management.",
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=RentMate+Lite",
      technologies: ["HTML", "Python", "Supabase", "CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "🌐 Desi Fusion Food",
      description: "Owner of www.desifusionfood.co.uk, a restaurant brand expanding into social media and digital presence.",
      image: "https://via.placeholder.com/400x250/DC2626/ffffff?text=Desi+Fusion+Food", 
      technologies: ["Business", "Branding", "Web Design", "Marketing"],
      liveLink: "http://www.desifusionfood.co.uk",
      githubLink: null
    },
    {
      title: "📱 Instagram Management",
      description: "Managing 5 Instagram accounts with different niches, reaching thousands of followers through strategic content creation.",
      image: "https://via.placeholder.com/400x250/7C3AED/ffffff?text=Instagram+Management",
      technologies: ["Content Creation", "Social Media", "Growth Strategy", "Analytics"],
      liveLink: "#",
      githubLink: null
    },
    {
      title: "✨ Upcoming Businesses",
      description: "Clothing brand & luxury scented candle business in development phase with comprehensive business planning.",
      image: "https://via.placeholder.com/400x250/F59E0B/ffffff?text=Upcoming+Businesses",
      technologies: ["Business Planning", "Brand Development", "Market Research", "Strategy"],
      liveLink: "#",
      githubLink: null
    },
    {
      title: "🎨 Design Portfolio",
      description: "Collection of design work including Canva creations, Instagram content, and visual branding materials.",
      image: "https://via.placeholder.com/400x250/EC4899/ffffff?text=Portfolio+Gallery",
      technologies: ["Canva", "Design", "Branding", "Visual Content"],
      liveLink: "#",
      githubLink: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {!project.liveLink && !project.githubLink && (
                    <div className="project-link">
                      <i className="fas fa-rocket"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
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

export default Projects;