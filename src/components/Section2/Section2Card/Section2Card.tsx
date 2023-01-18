import React from "react";
import "./Section2Card.css";
import { Col } from "react-bootstrap";

export default function Section2Card(props: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <Col lg={3} md={6} sm={12}>
      <div className="section2-card">
        <img src={props.img} alt="" />
        <div className="section2-card-text">
          <p>{props.title}</p>
          <h1>{props.description}</h1>
        </div>
      </div>
    </Col>
  );
}
