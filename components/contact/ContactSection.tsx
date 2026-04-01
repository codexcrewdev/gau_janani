"use client";

import "./contact.css";

export default function ContactSection() {
  return (
    <section className="contact section">
      <div className="container">

        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Reach out to us directly for any queries or services.
        </p>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <div className="contact-info">
              <h3>Get in Touch</h3>

              <p>📍 Your Business Location</p>
              <p>📞 +91 9663439728</p>
              <p>✉️ example@gmail.com</p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919663439728?text=Hi%20I%20would%20like%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                Chat on WhatsApp
              </a>

              {/* Call Button */}
              <a href="tel:+919663439728" className="call-btn">
                Call Now
              </a>
            </div>

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