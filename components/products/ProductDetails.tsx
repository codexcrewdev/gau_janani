"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./products.css";

export default function ProductDetails({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  // ✅ WHATSAPP MESSAGE
  const message = encodeURIComponent(
    `Hello, I would like to order:\n\n` +
    `${product.name}\n` +
    `Quantity: ${quantity}\n` +
    `Price: ₹${product.price * quantity}\n\n` +
    `Name:\nPhone:\nAddress:`
  );

  return (
    <div className="product-details">

      <div className="product-details-image">
        <img src={product.image?.asset?.url} alt={product.name} />
      </div>

      <div className="product-details-content">

        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>

        {/* QUANTITY */}
        <div className="quantity-box">
          <button onClick={decrease}>-</button>
          <span>{quantity}</span>
          <button onClick={increase}>+</button>
        </div>

        {/* ADD TO CART */}
        <button
          className="add-cart-btn"
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </button>

        {/* WHATSAPP ORDER */}
        <a
          href={`https://wa.me/919663439728?text=${message}`}
          target="_blank"
          className="whatsapp-btn"
        >
          Order on WhatsApp
        </a>

      </div>
    </div>
  );
}