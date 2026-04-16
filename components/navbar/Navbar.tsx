"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
  <div className="container nav-content">

    {/* LOGO */}
    <div className="logo">
      <Link href="/">
        <img src="/logo.png" alt="Janani Farms Logo" />
      </Link>
    </div>

    {/* LINKS */}
    <div className={`links ${open ? "active" : ""}`}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/contact">Contact</Link>
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