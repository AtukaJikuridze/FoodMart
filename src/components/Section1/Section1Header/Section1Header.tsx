import React from "react";
import "./Section1Header.css";
import { FaArrowRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
export default function Section1Headet() {
  return (
    <div className="section1-header">
      <h1>Category</h1>
      <div className="section1-header-rightside">
        <p>
          View All Categories <FaArrowRight />
        </p>
        <div className="arrowBox1">
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="arrowBox2">
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}
