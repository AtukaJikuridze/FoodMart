import React from "react";
import "./Section7Card.css";
import { Col } from "react-bootstrap";
import { FaCalendar, FaClock } from "react-icons/fa";
export default function Section7Card(props: {
  cls: string;
  img: string;
  title: string;
}) {
  return (
    <Col lg={4} md={12}>
      <div className="section7-card">
        <div className="section7-card-image">
          <img src={props.img} className={props.cls} alt="" />
        </div>
        <div className="section7-card-text">
          <div className="section7-card-calendar-text">
            <FaCalendar />
            <p>12 Jan, 2021</p>
            <FaClock />
            <p>15 Min</p>
          </div>
          <h2>{props.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend
            viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor
            morbi...
          </p>
        </div>
      </div>
    </Col>
  );
}
