"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext"; // 🔥 IMPORT
import "./products.css";

export default function ProductDetails({ product }: any) {
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart(); // 🔥 USE CART

    const increase = () => setQuantity((q) => q + 1);
    const decrease = () => {
        if (quantity > 1) setQuantity((q) => q - 1);
    };

    return (
        <div className="product-details">

            {/* IMAGE */}
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

                {/* INGREDIENTS */}
                {product.ingredients && (
                    <div className="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            {product.ingredients.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product, quantity)}
                >
                    Add to Cart
                </button>
                <a
                    href={`https://wa.me/919663439728?text=Hi I want ${product.name} (Qty: ${quantity})`}
                    target="_blank"
                    className="whatsapp-btn"
                >
                    Order on WhatsApp
                </a>

            </div>

        </div>
    );
}