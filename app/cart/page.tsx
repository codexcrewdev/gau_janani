"use client";

import { useCart } from "../../context/CartContext";
import "./cart.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const message = cart
    .map(
      (item: any) =>
        `${item.name} (Qty: ${item.quantity}) - ₹${item.price}`
    )
    .join("%0A");

  return (
    <section className="cart-section">
      <div className="container">

        <h1>Your Cart</h1>

        {cart.length === 0 && <p>Your cart is empty</p>}

        <div className="cart-grid">

          {/* ITEMS */}
          <div className="cart-items">
            {cart.map((item: any, index: number) => (
              <div
                key={`${item._id || item.name}-${index}`}
                className="cart-item"
              >

                {/* 🔥 IMAGE */}
                <div className="cart-image">
                  <img
                    src={item.image?.asset?.url}
                    alt={item.name}
                  />
                </div>

                {/* INFO */}
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                {/* QUANTITY */}
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

                {/* REMOVE */}
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

              <a
                href={`https://wa.me/919663439728?text=Hi, I want to order:%0A${message}%0ATotal: ₹${totalPrice}`}
                className="checkout-btn"
                target="_blank"
              >
                Checkout on WhatsApp
              </a>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}