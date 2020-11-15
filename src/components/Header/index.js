import React from "react";
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";

export default function Header({ total }) {
  return (
    <div className="header-container">
      <Cart size="30px" className="cart-icon" />
      <span className="total">{total}</span>
      <span> items</span>
    </div>
  );
}
