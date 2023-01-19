import React from "react";
import "./Section3Card.css";
import { Col } from "react-bootstrap";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useRef } from "react";

export default function Section3Card(props: {
  id: number;
  title: string;
  weight: string;
  rating: number | string;
  price: number | string;
  quantity: any;
  quantityDown: any;
  quantityUp: any;
  image: string;
}) {
  const quantityRef = useRef<any>(null);

  return (
    <Col lg={3}>
      <div className="section3-card">
        <div className="section3-card-image">
          <img src={props.image} alt="" />
        </div>
        <div className="section3-card-text">
          <h2>{props.title}</h2>
          <div className="d-flex">
            <p>{props.weight}</p>
            <p>
              <FaStar />
              {props.rating}
            </p>
          </div>
          <h3>{props.price}</h3>

          <div className="section3-card-footer">
            <div className="section3-card-footer-leftside">
              <button onClick={props.quantityDown}>-</button>
              <p ref={quantityRef}>{props.quantity}</p>
              <button onClick={props.quantityUp}>+</button>
            </div>
            <div className="section3-card-footer-rigthside">
              <p>
                Add To Cart <FaShoppingCart />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
