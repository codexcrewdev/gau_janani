import "./about.css";

export default function AboutPage() {
  return (
    <section className="about section">
      <div className="container">

        <div className="about-header">
          <h1>About Us</h1>
          <p>
            We are dedicated to creating meaningful impact through sustainable
            practices, tradition, and community-focused initiatives.
          </p>
        </div>

        <div className="about-content">

          {/* IMAGE */}
          <div className="about-image">
            <img src="/images/about.jpg" alt="About" />
          </div>

          {/* TEXT */}
          <div className="about-text">

            <h2>Our Story</h2>

            <p>
              Our journey began with a simple vision — to build something that
              connects people with nature, tradition, and a healthier lifestyle.
            </p>

            <p>
              Over time, we have grown into a community-driven initiative focused
              on sustainability, quality, and long-term impact.
            </p>

            <p>
              We believe in authenticity, transparency, and delivering real value
              to the people we serve.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}