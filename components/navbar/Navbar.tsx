"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<any>(null);

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  // 🔥 CLOSE WHEN CLICK OUTSIDE
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔥 CLOSE ON LINK CLICK
  const handleClose = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">

        {/* LOGO */}
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* LINKS */}
        <div
          ref={menuRef}
          className={`links ${open ? "active" : ""}`}
        >
          <Link href="/" onClick={handleClose}>Home</Link>
          <Link href="/about" onClick={handleClose}>About</Link>
          <Link href="/products" onClick={handleClose}>Products</Link>
          <Link href="/contact" onClick={handleClose}>Contact</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-actions">

          {/* CART */}
          <Link href="/cart" className="cart-icon">
            🛒
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>

          {/* MENU */}
          <div className="menu" onClick={() => setOpen(!open)}>
            ☰
          </div>

        </div>

      </div>
    </nav>
  );
}