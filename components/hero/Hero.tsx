'use client';

import "./hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-content container">
        <h1>
          Embrace the Sacred Gifts of Gau Matha
        </h1>

        <p>
          Discover the natural benefits of eco-friendly products crafted from indigenous cows. At Gaujanani, we are committed to promoting sustainability and protecting our planet with every creation.
        </p>

        <div className="buttons">
          <button className="primary" onClick={() => window.open('https://www.google.com/maps/place/Janani+Farms/@13.3824305,74.8420777,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbca3eeaaaaaaa9:0x79413822898053f2!8m2!3d13.3824253!4d74.8469486!16s%2Fg%2F11f553glcb?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
            Visit Farm</button>
          <Link href="/contact">
            <button className="secondary">Contact</button>
          </Link>
        </div>
      </div>
    </section>
  );
}