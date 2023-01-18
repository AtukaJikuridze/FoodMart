import { useState, useRef, useEffect } from "react";
import NavBottom from "../NavbarBottom/NavBottom";
import "./Navbar.css";
import NavCategorys from "./NavbarCategories/NavCategories";
import NavUser from "./NavbarUser/NavUser";
import { FaBars } from "react-icons/fa";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [bars, setBars] = useState(true);

  function barChange() {
    setBars(!bars);
    navRef.current.classList.toggle("afterNav");
  }
  const navRef = useRef<any>(null);

  return (
    <nav ref={navRef}>
      {bars ? (
        <FaBars className="bar" onClick={barChange} />
      ) : (
        <FontAwesomeIcon icon={faX} className="bar" onClick={barChange} />
      )}
      <div className="navbar-container container">
        <img src={require("../../../images/logo.png")} alt="" />
        <NavCategorys />
        <NavUser />
      </div>
      <NavBottom />
    </nav>
  );
}
