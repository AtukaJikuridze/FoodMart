import React from "react";
import "./Section4Rightside.css";
import { Col } from "react-bootstrap";
export default function Section4Rightside() {
  return (
    <Col lg={6} md={12}>
      <div className="section4-rightside">
        <div className="section4-rightside-text">
          <p>Upto 15% Off</p>
          <h1>Luxa Dark Chocolate</h1>
          <p>Chocolate is only the happiness that you can eat.</p>
          <button>SHOP IT</button>
        </div>
      </div>
    </Col>
  );
}
