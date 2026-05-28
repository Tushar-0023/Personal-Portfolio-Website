import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <div className="hero-left">
        <p className="hero-tag">FULL STACK WEB DEVELOPER</p>

        <h1>
          Hi, I'm <span className="animated-name">Tushar</span>
          <br />
          Building Modern &
          <br />
          Scalable Web Apps
        </h1>

        <p className="hero-description">
          Passionate Full Stack Developer skilled in React, Node.js, Express.js
          and MySQL. I build responsive and user-friendly web applications with
          clean UI and scalable architecture.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">View Projects</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Contact Me</button>
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Tushar-0023" target="_blank">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-rajput-918289306"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="glow-circle"></div>

        <div className="profile-card">
          <img src="/src/assets/images/profile.jpg" alt="Tushar profile" />{" "}
        </div>
      </div>
    </section>
  );
};

export default Hero;
