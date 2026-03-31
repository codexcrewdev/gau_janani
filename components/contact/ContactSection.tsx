"use client";

import "./contact.css";

export default function ContactSection() {
  return (
    <section className="contact section">
      <div className="container">

        {/* TITLE */}
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We would love to hear from you. Reach out for visits, products, or any queries.
        </p>

        {/* MAIN LAYOUT */}
        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left">

            {/* CONTACT INFO */}
            <div className="contact-info">
              <h3>Contact Details</h3>

              <p>📍 Janani Farms, Kukkehalli, Karnataka</p>
              <p>📞 +91 9663439728</p>
              <p>✉️ example@gmail.com</p>

              <a
                href="https://wa.me/919663439728?text=Hi%20I%20am%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* FORM */}
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (You can connect backend later)");
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                required
              />

              <button type="submit">Send Message</button>
            </form>

          </div>

          {/* RIGHT SIDE - MAP */}
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.4823722584374!2d74.84437367586126!3d13.382430505736474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca3eeaaaaaaa9%3A0x79413822898053f2!2sJanani%20Farms!5e0!3m2!1sen!2sin!4v1774981178560!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}