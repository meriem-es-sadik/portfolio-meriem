const projectsData = [
  {
    title: 'Personal Portfolio',
    description:
      'A modern, responsive portfolio website built with HTML and CSS, featuring a glassmorphism design and smooth animations.',
    image: "/img/Capture d'écran 2026-08-26 163903.png",
    alt: 'Personal Portfolio',
    tags: ['HTML', 'CSS', 'Responsive Design', 'React'],
    demo: '#',
    code: 'https://github.com/meriem-es-sadik/portfolio',
  },
  {
    title: 'Inaya E-Commerce',
    description:
      'A modern e-commerce website with a clean design, product listings, and responsive layout.',
    image: "/img/Capture d'écran 2026-08-26 165715.png",
    alt: 'Inaya E-Commerce',
    tags: ['HTML', 'CSS', 'E-Commerce'],
    demo: 'https://inaya-e-commerce-website.vercel.app',
    code: 'https://github.com/meriem-es-sadik/INAYA-e-commerce-website',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="btn-small" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.code} className="btn-small" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
