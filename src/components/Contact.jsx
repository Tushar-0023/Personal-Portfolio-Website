import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "cbded594-bea8-4d28-a816-0f035395a8c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      console.log(data);
      setResult("❌ Failed to send message.");
    }
  };

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
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          <span className="form-result">{result}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
