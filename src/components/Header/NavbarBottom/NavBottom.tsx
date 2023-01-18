import React from "react";
import "./NavBottom.css";
import { Container } from "react-bootstrap";
import { MdArrowDropDown } from "react-icons/md";
import NavBottomUl from "./NavBottomUl/NavBottomUl";

export default function NavBottom() {
  return (
    <div className="navbottom-main">
      <Container className="navbottom-container">
        <div className="navbottom-leftside">
          <p>
            shop by departments <MdArrowDropDown />
          </p>
        </div>
        <NavBottomUl />
        <div className="navbottom-rightside">
          <img src={require("../../../images/Gift.png")} alt="" />
          <h3>Get Your Coupon Code</h3>
        </div>
      </Container>
    </div>
  );
}
