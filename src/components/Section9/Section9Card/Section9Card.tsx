import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Section9Card.css";
import { Col } from "react-bootstrap";
export default function Section9Card(props: { title: string; icon: any }) {
  return (
    <Col lg={3} md={6}>
      <div className="section9-card">
        {props.icon}
        <div className="section9-card-text">
          <h5>{props.title}</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
      </div>
    </Col>
  );
}
