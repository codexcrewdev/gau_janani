import "./mission.css";

export default function Mission() {
  return (
    <section className="mission">
      <div className="container mission-container">

        <div className="mission-image">
          <img src="/images/mission.webp" alt="Our Mission" />
        </div>

        <div className="mission-content">

          <span className="tag">Our Mission</span>

          <h2>
            Empowering Rural Lives Through
            <br /> Desi Cow Culture
          </h2>

          <p>
            We aim to create sustainable livelihoods by encouraging rural
            families to rear desi cows and embrace the gobar economy.
          </p>

          <p>
            Our work promotes environmental balance, supports traditional values, and creates a healthier lifestyle for future generations.
          </p>

        </div>

      </div>
    </section>
  );
}