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
                        <img src="/images/about_main.jpg" alt="About" />
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
                                Janani Farms didn't start as a plan. It started as a problem in our own lives.
                            </p>

                            <p>
                                While working in the Gulf, we began facing health issues - one of them being swelling near the rib area. We tried treatments, but nothing felt completely right. That's when we started questioning our lifestyle, especially the kind of food we were consuming every day.
                            </p>

                            <p>
                                Around that time, someone suggested trying desi cow milk (A2 milk). We didn't think much of it at first, but we decided to give it a try. Slowly, as we continued, we could actually feel a difference in our health.
                            </p>

                            <p>
                                That experience stayed with us.
                            </p>

                            <p>
                                It made us curious about indigenous cows and the role they play - not just in farming, but in everyday well-being. What started as curiosity soon became something deeper.
                            </p>

                        </div>


                        {/* RIGHT - VIDEO */}
                        <div className="video-container">
                            <iframe width="660" height="560" src="https://www.youtube.com/embed/L4NfBkQHX5I?si=qxoIjQ5kpwd6sKXU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                    </div>
                    <div className="story-text story-text-2">
                        <p>
                            Around 2017-2018, we made the decision to come back and start Janani Farms.
                        </p>

                        <p>
                            In the beginning, we had both Gir and Malnad Gidda cows, and with the help of workers, we were managing things well. But when the workers left and didn't return, it became difficult to continue at the same scale. That phase wasn't easy - it forced us to slow down and rethink everything.
                        </p>

                        <p>
                            During this time, we also received guidance and support from ISKCON, which helped us stay steady and keep going.
                        </p>

                        <p>
                            Gradually, we shifted our focus. The Malnad Gidda cow, being native to our region and easier to manage in our conditions, became central to our farm. Today, we have one Tharparkar, and the rest are Malnad Gidda.
                        </p>

                        <p>
                            Over time, our approach also changed.
                        </p>

                        <p>
                            We moved away from commercial milk selling and started focusing more on creating a natural, self-sustaining system around our cows. Along with that, we began making traditional cow-based products, using methods we trusted.
                        </p>

                        <p>
                            That's how Gau Janani came into the picture.
                        </p>

                        <p>
                            <strong>
                                What began as something personal - just trying to fix our own health - has now become our way of life.
                            </strong>
                        </p>
                        <p>
                            <strong>
                                We’ve seen the difference it can make, and we believe others can experience it too. Through Janani Farms and Gau Janani, we’re simply trying to share what we’ve learned and lived.
                            </strong>
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}