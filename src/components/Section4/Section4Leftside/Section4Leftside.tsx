import React from "react";
import "./Section4Leftside.css";
import { Col } from "react-bootstrap";
export default function Section4Leftside() {
  return (
    <Col lg={6} md={12}>
      <div className="section4-leftside">
        <div className="section4-leftside-text">
          <p>Upto 15% Off</p>
          <h1>Luxa Dark Chocolate</h1>
          <p>Chocolate is only the happiness that you can eat.</p>
          <button>SHOP IT</button>
        </div>
        <div className="section4-leftside-image">
          <img
            src={require("../../../images/section4-leftside-cardimage.png")}
            alt=""
          />
        </div>
      </div>
    </Col>
  );
}
