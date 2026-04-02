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
            <button className="primary">Order Now</button>
          </Link> 
          <Link href="/contact">
            <button className="secondary">Visit Farm</button>
          </Link>
        </div>
      </div>

    </section>
  );
}