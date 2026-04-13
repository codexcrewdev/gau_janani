import "./features.css";

export default function Features() {
  const features = [
    {
      title: "Chemical Free",
      desc: "100% chemical free products",
      icon: "/icons/chemical.png",
    },
    {
      title: "No Adulteration",
      desc: "0% adulteration / No artificial colors",
      icon: "/icons/adultration.png",
    },
    {
      title: "Aroma",
      desc: "Original natural aroma & taste",
      icon: "/icons/aroma.png",
    },
    {
      title: "Environment Friendly",
      desc: "Good for environment and planet",
      icon: "/icons/environment.png",
    },
    {
      title: "Natural Goodness",
      desc: "Guaranteed purity and natural goodness",
      icon: "/icons/natural.png",
    },
  ];

  return (
    <section className="features section">
      <div className="container features-container">

        {/* LEFT IMAGE */}
        <div className="features-image">
          <img src="/images/cow.avif" alt="Desi Cow" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="features-content">

          <h2 className="features-heading">
            Why Choose Gau Janani
          </h2>

          <p className="features-subtitle">
            Crafted with purity, rooted in tradition, and trusted for quality.
          </p>

          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-item">

                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}