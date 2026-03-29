import Link from "next/link";
import "./aboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-preview-container">

        {/* TEXT */}
        <div className="about-text">
          <h2>About Janani Farms</h2>

          <p>
            Janani Farms is dedicated to preserving desi cows and promoting
            sustainable living rooted in tradition and rural empowerment.
          </p>

          <p>
            We believe in creating a balance between nature, agriculture,
            and healthy lifestyles.
          </p>

          <Link href="/about" className="read-more">
            Read More →
          </Link>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <img src="/images/about.webp" alt="About farm" />
        </div>

      </div>
    </section>
  );
}