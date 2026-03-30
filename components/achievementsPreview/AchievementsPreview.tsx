import Link from "next/link";
import "./achievementsPreview.css";

export default function AchievementsPreview() {
    return (
        <section className="achievements">
            <div className="container">

                <h2 className="title">Recognized & Trusted</h2>
                <p className="subtitle">
                    Our work has been appreciated and recognized by various communities and organizations.
                </p>

                <div className="grid">

                    <img src="/images/award1.jpg" alt="Award 1" />
                    <img src="/images/award2.jpg" alt="Award 2" />
                    <img src="/images/award3.jpg" alt="Award 3" />

                </div>

                {/* <div className="center">
          <Link href="/achievements" className="view-all">
            View All Achievements →
          </Link>
        </div> */}

            </div>
        </section>
    );
}