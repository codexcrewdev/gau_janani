import "./mission.css";

export default function Mission() {
  return (
    <section className="mission-section">
      <div className="container mission-container">

        {/* IMAGE */}
        <div className="mission-image">
          <img src="/images/mission.webp" alt="Farm mission" />
        </div>

        {/* TEXT */}
        <div className="mission-content">
          <h2>Our Mission</h2>

          <p>
            We aim to empower rural families by encouraging them to rear
            desi cows and build sustainable livelihoods through the gobar economy.
          </p>

          <p>
            Our work promotes environmental balance, supports traditional
            values, and creates a healthier lifestyle for future generations.
          </p>

        </div>

      </div>
    </section>
  );
}