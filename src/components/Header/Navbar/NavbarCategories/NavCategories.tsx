import React from "react";
import "./NavCategories.css";
import { MdArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
export default function NavCategories() {
  return (
    <div className="nav-categories-main">
      <div className="nav-categories-leftside">
        <h4>
          All Categories{" "}
          <span>
            <MdArrowDropDown />
          </span>
        </h4>
      </div>
      <div className="nav-categories-middleside">
        <input type="text" placeholder="Search for products.." />
      </div>
      <div className="nav-categories-rightside">
        <FaSearch />
      </div>
    </div>
  );
}
