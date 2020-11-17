import React from "react";
import { FaShoppingCart as Cart } from "react-icons/fa";

export default function Header({ total }) {
  return (
    <div className="header-container">
      <Cart size="22px" color="black" className="cart-icon" />
      <span className="total">{total}</span>
      <span> items</span>
    </div>
  );
}
