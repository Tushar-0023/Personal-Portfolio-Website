import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <div className="skills-header">
        <p className="section-tag">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <p className="skills-text">
          I work across frontend, backend, databases, and development tools to
          build scalable and responsive web applications.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-items">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Bootstrap</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-items">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST API</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <div className="skill-items">
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-items">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
