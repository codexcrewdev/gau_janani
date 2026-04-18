"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {

  // ✅ SAFE INITIAL LOAD (no overwrite bug)
  const [cart, setCart] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ ADD TO CART
  const addToCart = (product: any, quantity: number) => {
    setCart((prev) => {
      const exists = prev.find((item) => item._id === product._id);

      if (exists) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };

  // ✅ REMOVE ITEM
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  // ✅ UPDATE QUANTITY (FIXED)
  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id); // 🔥 auto remove if 0
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ✅ HOOK
export const useCart = () => useContext(CartContext);