import Link from "next/link";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* LEFT - LOGO */}
                <div className="footer-left">
                    <Link href="/">
                        <img src="/logo.png" alt="Janani Farms Logo" className="logo-img" />
                    </Link>
                </div>

                {/* CENTER - NAV LINKS */}
                <div className="footer-center">
                    <h3>Quick Links</h3>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/Products">Products</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* RIGHT - CONTACT */}
                <div className="footer-right">
                    <h3>Contact</h3>
                    <p>📍 Janani Farms, Kukkehali - 576124</p>
                    <p>📞 +91 9663439728</p>
                    <p>✉️ gaujanani.info@gmail.com</p>

                    <div className="socials">
                        <a href="https://instagram.com/gau_janani" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram.svg" alt="Instagram" />
                        </a>
                        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/facebook.svg" alt="Facebook" />
                        </a> */}
                        <a href="https://wa.me/919663439728" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/whatsapp.svg" alt="WhatsApp" />
                        </a>
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} Janani Farms. All rights reserved.
            </div>
        </footer>
    );
}