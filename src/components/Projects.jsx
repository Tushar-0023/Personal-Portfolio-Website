import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="projects-header">
        <p className="section-tag">MY PROJECTS</p>

        <h2>Featured Projects</h2>

        <p className="projects-text">
          Here are some projects I built to strengthen my full stack development
          skills and solve real-world problems.
        </p>
      </div>

      <div className="projects-grid">
        {/* HireNova AI */}
        <div className="project-card featured">
          <div className="project-content">
            <p className="project-label">Featured Project</p>
            <h3>HireNova AI</h3>
            <p>
              AI-based recruitment platform with role-based authentication, job
              posting, applications, and recruiter dashboard.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">
              <a href="https://github.com/Tushar-0023" target="_blank">
                GitHub
              </a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </div>

        {/* Student CRUD */}
        <div className="project-card">
          <h3>Student CRUD System</h3>
          <p>
            Full stack CRUD app for managing student records with authentication
            and database integration.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
          </div>
        </div>

        {/* E-commerce Project */}
        <div className="project-card">
          <h3>E-commerce Website</h3>

          <p>
            Full stack e-commerce platform with product listing, cart system,
            authentication, and order management features.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Tushar-0023" target="_blank">
              GitHub
            </a>
            <a href="#">Live Demo</a>
          </div>
        </div>

        {/* Real-time Chat App */}
        <div className="project-card">
          <h3>Real-Time Chat App</h3>

          <p>
            Instant messaging application with real-time communication, user
            authentication, and live chat rooms using WebSockets.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Socket.io</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Tushar-0023" target="_blank">
              GitHub
            </a>
            <a href="#">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
