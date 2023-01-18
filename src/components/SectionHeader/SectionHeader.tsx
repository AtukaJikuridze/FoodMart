import React from "react";
import "./SectionHeader.css";
import { FaArrowRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
export default function Section1Headet(props: {
  title: string;
  category: string;
}) {
  return (
    <div className="section-header">
      <h1>{props.category}</h1>
      <div className="section-header-rightside">
        <p>
          {props.title} <FaArrowRight />
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
