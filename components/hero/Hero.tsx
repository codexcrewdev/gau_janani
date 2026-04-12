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
          <button className="primary">Visit Farm</button>
          <Link href="/contact">
            <button className="secondary">Contact</button>
          </Link>
        </div>
      </div>
    </section>
  );
}