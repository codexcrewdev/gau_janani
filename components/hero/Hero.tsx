import "./hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-content container">
        <h1>
          Preserving Desi Cows <br />
          & Rural Livelihoods
        </h1>

        <p>
          Supporting sustainable farming, empowering rural families,
          and protecting traditional values.
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