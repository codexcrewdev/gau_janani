"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">

         <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Janani Farms Logo" />
          </Link>
        </div>

        <div className={`links ${open ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Mission</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>

        <div className="menu" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </nav>
  );
}