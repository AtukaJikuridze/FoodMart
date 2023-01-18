import React from "react";
import "./NavUser.css";
import NavUserIcons from "./NavUserIcons/NavUserIcons";

export default function NavUser() {
  return (
    <div className="navbar-user-main">
      <div className="navuser-leftside">
        <p>For Support ?</p>
        <h1>+980-34984089</h1>
      </div>
      <NavUserIcons />
      <div className="navuser-rightside">
        <p>your cart</p>
        <h1>$1290.00</h1>
      </div>
    </div>
  );
}
