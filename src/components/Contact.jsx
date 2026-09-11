import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-heading">
          <span>Contact</span>
          <h2>Let's Work Together</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:meriem.essadik.01@gmail.com">
                    meriem.essadik.01@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+212777023845">+212 777 023 845</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h3>Location</h3>
                <p>Bouskoura, Casablanca, Morocco</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/meriem-es-sadik" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/meriem-es-sadik/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:meriem.essadik.01@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://wa.me/212777023845" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
