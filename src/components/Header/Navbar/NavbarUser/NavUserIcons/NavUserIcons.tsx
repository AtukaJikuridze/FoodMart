import React from "react";
import "./NavUserIcons.css";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function NavUserIcons() {
  return (
    <div className="nav-usericons">
      <div className="navIcon">
        <FaUser />
      </div>
      <div className="navIcon">
        <FaHeart />
      </div>
      <div className="navIcon">
        <FaShoppingCart className="cart" />
      </div>
    </div>
  );
}
