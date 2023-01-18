import React from "react";
import { Col } from "react-bootstrap";
import "./Section1Card.css";

export default function Section1Card(props: {
  categoryImg: string;
  categoryTitle: string;
}) {
  return (
    <Col lg={2} md={6} sm={12}>
      <div className="section1-card">
        <div>
          <img src={props.categoryImg} alt="" />
          <p>{props.categoryTitle}</p>
        </div>
      </div>
    </Col>
  );
}
