import "./about.css";

export default function AboutPage() {
    return (
        <section className="about section">
            <div className="container">

                <div className="about-header">
                    <h1>About Us</h1>
                    <p>We are dedicated to creating meaningful impact through sustainable practices, tradition, and community-focused initiatives.</p>
                </div>

                <div className="about-content">

                    {/* IMAGE */}
                    <div className="about-image">
                        <img src="/images/about.jpg" alt="About" />
                    </div>

                    {/* TEXT */}
                    <div className="about-text">
                        <p>
                            This farm was founded with a deep sense of devotion and responsibility to serve and protect our sacred <strong>Gaumatas</strong>, while preserving the timeless Vedic traditions of <strong>Sanatan Dharma</strong>. Rooted in our cultural heritage, we believe that cows are not just animals, but a symbol of nourishment, purity, and selfless giving.
                        </p>
                        <p>
                            Our desi cows are at the heart of everything we do. They represent a way of life that is in harmony with nature and guided by ancient wisdom. Through their care, we strive to revive and sustain traditional practices that promote spiritual well-being, environmental balance, and a healthier lifestyle.
                        </p>
                        <p>
                            At our farm, we follow ethical and compassionate methods of care, ensuring that each cow is treated with love, respect, and dignity. We are committed to creating a space where tradition and sustainability go hand in hand where the teachings of our ancestors continue to guide us in today's world.
                        </p>
                        <p>
                            Our mission is not only to protect and nurture our Gaumatas but also to inspire others to reconnect with our roots, understand the importance of desi cows in our ecosystem, and embrace a life of simplicity, balance, and inner peace.
                        </p>

                    </div>

                </div>
                <div className="our-story">
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
        </section>
    );
}