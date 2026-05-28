import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact-header">
        <p className="section-tag">CONTACT</p>

        <h2>Let’s Connect</h2>

        <p>
          I am currently a B.Tech student and actively looking for internship
          and full-time opportunities in Full Stack Web Development. Feel free
          to reach out for collaborations or job roles.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>tusharsingh2323@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>Open To</h3>
            <p>Internships • Full-time Roles</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Amritsar, Punjab</p>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
