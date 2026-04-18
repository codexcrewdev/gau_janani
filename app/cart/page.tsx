"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "./cart.css";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: {
    asset?: {
      url: string;
    };
  };
};

type UserDetails = {
  name: string;
  phone: string;
  address: string;
};

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart() as {
    cart: CartItem[];
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, qty: number) => void;
  };

  // ✅ MODAL
  const [showForm, setShowForm] = useState<boolean>(false);

  // ✅ USER DETAILS
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // ✅ LOAD USER DATA
  useEffect(() => {
    const saved = localStorage.getItem("userDetails");
    if (saved) {
      const parsed: UserDetails = JSON.parse(saved);
      setName(parsed.name);
      setPhone(parsed.phone);
      setAddress(parsed.address);
    }
  }, []);

  // ✅ TOTAL
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ CHECKOUT
  const handleCheckout = () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    // ✅ SAVE USER DETAILS
    const userDetails: UserDetails = { name, phone, address };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    const message = encodeURIComponent(
      `Hello, I would like to place an order:\n\n` +
        cart
          .map(
            (item, index) =>
              `${index + 1}. ${item.name} – Qty: ${item.quantity} – ₹${item.price * item.quantity}`
          )
          .join("\n") +
        `\n\nTotal: ₹${totalPrice}\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`
    );

    window.open(`https://wa.me/919663439728?text=${message}`, "_blank");

    setShowForm(false);
  };

  return (
    <section className="cart-section">
      <div className="container">

        <h1>Your Cart</h1>

        {cart.length === 0 && (
  <div className="empty-state">
    <h2>Your cart is empty</h2>
    <p>Looks like you haven’t added anything yet.</p>

    <a href="/products" className="empty-btn">
      Browse Products
    </a>
  </div>
)}

        <div className="cart-grid">

          {/* ITEMS */}
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={`${item._id}-${index}`} className="cart-item">

                <div className="cart-image">
                  <img src={item.image?.asset?.url} alt={item.name} />
                </div>

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <div className="cart-qty">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* SUMMARY */}
          {cart.length > 0 && (
            <div className="cart-summary">

              <h3>Order Summary</h3>

              <p>Total: ₹{totalPrice}</p>

              <button
                className="checkout-btn"
                onClick={() => setShowForm(true)}
              >
                Checkout on WhatsApp
              </button>

            </div>
          )}

        </div>

      </div>

      {/* ================= MODAL ================= */}
      {showForm && (
        <div
          className="checkout-modal"
          onClick={() => setShowForm(false)}
        >
          <div
            className="checkout-box"
            onClick={(e) => e.stopPropagation()}
          >

            <h3>Enter Details</h3>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="checkout-actions">
              <button onClick={() => setShowForm(false)}>Cancel</button>
              <button onClick={handleCheckout}>
                Proceed to WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}