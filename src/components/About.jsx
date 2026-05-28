import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-top">
        <p className="section-tag">ABOUT ME</p>

        <h2>Passionate About Building Modern Web Experiences</h2>

        <p className="about-text">
          I am a passionate Full Stack Web Developer focused on building modern,
          responsive, and user-friendly web applications. I enjoy working with
          React, Node.js, Express.js, and MySQL while continuously improving my
          problem-solving and development skills through real-world projects.
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>5+</h3>
          <p>Projects Built</p>
        </div>

        <div className="about-card">
          <h3>MERN</h3>
          <p>Full Stack Learning</p>
        </div>

        <div className="about-card">
          <h3>React</h3>
          <p>Frontend Development</p>
        </div>

        <div className="about-card">
          <h3>Node.js</h3>
          <p>Backend Development</p>
        </div>
      </div>
    </section>
  );
};

export default About;
