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
                <div className="our-story section">

                    {/* HEADING */}
                    <h2 className="story-heading">Our Story</h2>

                    <div className="story-container">

                        {/* LEFT - TEXT */}
                        <div className="story-text">
                            <p>
                                The journey of Janani Farms began far away from the fields, during our time working in the Gulf.
                            </p>

                            <p>
                                During that phase of life, we started facing health issues, including swelling near the rib area. Even after trying treatments, we were not fully satisfied, which made us question our lifestyle and the kind of food we were consuming.
                            </p>

                            <p>
                                At that point, someone suggested that desi cow milk (A2 milk) could help improve our condition. This led us to explore more about indigenous cows and their importance.
                            </p>

                            <p>
                                We began consuming it ourselves and experienced positive changes in our health.
                            </p>

                            <p>
                                This experience inspired us to start Janani Farms, with the vision of providing pure, natural A2 milk and promoting the benefits of desi cows to others.
                            </p>

                            <p>
                                Around 2017-2018, we made the decision to return and start Janani Farms, focusing on indigenous cows. In the beginning, we worked with both Malnad Gidda and Gir cows.
                            </p>

                            <p>
                                Initially, we had workers supporting us. However, when they returned to their hometown and did not come back, it created a shortage of workers, making it difficult to manage everything at the same scale.
                            </p>

                            <p>
                                During this time, we also received guidance and support from ISKCON, which helped us continue our journey.
                            </p>

                            <p>
                                Due to the shortage of workers, maintaining Gir cows became difficult. As a result, we reduced them. Today, we have one Gir cow, and the rest of our farm is centered around the Malnad Gidda cow, which is more suitable for our region and manageable with our setup.
                            </p>

                            <p>
                                Over time, we moved away from commercial milk selling and focused on building a natural, self-sustaining system around our cows.
                            </p>

                            <p>
                                Along with farming, we also began preparing natural cow-based products using traditional methods. This led to the creation of our brand, Gau Janani — through which we share these products with others.
                            </p>

                            <p>
                                What started as a solution for our own health has now become our way of life.
                            </p>

                            <p>
                                <strong>
                                    Having experienced these benefits ourselves, we believe others can benefit in the same way.
                                    Through Janani Farms and our brand Gau Janani, we aim to share the value of desi cows and natural living with more people.
                                </strong>
                            </p>
                        </div>

                        {/* RIGHT - VIDEO */}
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube+/embed/L4NfBkQHX5I"
                                title="Our Story"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}