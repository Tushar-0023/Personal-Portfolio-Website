import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="projects-header">
        <p className="section-tag">MY PROJECTS</p>

        <h2>Featured Projects</h2>

        <p className="projects-text">
          Here are some projects I built to strengthen my full stack development
          skills by solving real-world problems using modern web technologies
          and AI.
        </p>
      </div>

      <div className="projects-grid">
        {/* ================= TEAMFLOW ================= */}

        <div
          className="project-card featured"
          onClick={() =>
            window.open("https://team-flow-flame.vercel.app/", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <div className="project-content">
            <p className="project-label">Featured Project</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ margin: 0 }}>TeamFlow</h3>

              <a
                href="https://github.com/Tushar-0023/TeamFlow"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  color: "#60a5fa",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                GitHub ↗
              </a>
            </div>

            <p>
              Modern SaaS project management platform featuring authentication,
              project management, task management, Kanban board, analytics,
              profile management, responsive UI and premium dashboard.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>JWT</span>
            </div>
          </div>
        </div>

        {/* ================= RESUMEIQ AI ================= */}

        <div
          className="project-card"
          onClick={() =>
            window.open(
              "https://frontend-resume-analyzer.vercel.app/",
              "_blank",
            )
          }
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ margin: 0 }}>ResumeIQ AI</h3>

            <a
              href="https://github.com/Tushar-0023/ResumeIQ-AI"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: "#60a5fa",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>

          <p>
            AI-powered resume analyzer that evaluates resumes, analyzes skills,
            provides resume scoring, smart feedback and personalized AI
            suggestions to improve resumes.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>OpenAI</span>
          </div>
        </div>
        {/* ================= E-COMMERCE ================= */}

        <div className="project-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ margin: 0 }}>E-commerce Website</h3>

            <a
              href="https://github.com/Tushar-0023?tab=repositories"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#60a5fa",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>

          <p>
            Full stack e-commerce platform featuring secure authentication,
            product catalog, shopping cart, order management, responsive UI, and
            a smooth online shopping experience.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>Bootstrap</span>
          </div>
        </div>

        {/* ================= HIRENOVA AI ================= */}

        <div className="project-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ margin: 0 }}>HireNova AI</h3>

            <a
              href="https://github.com/Tushar-0023/Hire-Nova-AI"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#60a5fa",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>

          <p>
            AI-powered recruitment platform with secure authentication,
            recruiter dashboard, job posting, candidate management, and an
            intelligent hiring workflow.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>JWT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
