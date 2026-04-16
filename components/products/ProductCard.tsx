"use client";

import "./products.css";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image?.asset?.url} alt={product.name} />
      </div>

      <div className="product-content">

        <h3>{product.name}</h3>

        <p className="price">₹{product.price}</p>

        <div className="product-actions">

          {/* TOP ROW */}
          <div className="action-row">
            <a href={`/products/${product.slug.current}`} className="view-btn">View Details</a>

          <a
            href={`https://wa.me/919663439728?text=Hi I want ${product.name}`}
            target="_blank"
            className="whatsapp-btn"
          >
            Order
          </a>
          </div>

          {/* FULL WIDTH BUTTON */}
          <button
            className="add-cart-btn-card"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}