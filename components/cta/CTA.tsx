'use client';

import "./cta.css";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta">

      <div className="overlay" />

      <div className="cta-content container">
        <h2>Experience Pure Desi Cow Products</h2>

        <p>
          Support sustainable farming and bring home natural, healthy products
          made with care and tradition.
        </p>

        <div className="cta-buttons">
          <Link href="/products">
            <button className="primary">Explore Now</button>
          </Link>
          <Link href="/contact">
            <button className="secondary" onClick={() => window.open('https://www.google.com/maps/place/Janani+Farms/@13.3824305,74.8420777,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbca3eeaaaaaaa9:0x79413822898053f2!8m2!3d13.3824253!4d74.8469486!16s%2Fg%2F11f553glcb?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D', '_blank')}>
              Visit Farm</button>
          </Link>
        </div>
      </div>

    </section>
  );
}