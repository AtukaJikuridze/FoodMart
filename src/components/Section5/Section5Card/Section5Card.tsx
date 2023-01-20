import React from "react";
import "./Section5Card.css";
import { Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export default function Section5Card(props: {
  img: string;
  title: string;
  rating: number;
  oldprice: string;
  newprice: string;
  sold: string;
  quantity: number;
  increment: any;
  decrement: any;
  id: number;
  heart: any;
  setFavorite: any;
}) {
  return (
    <Col>
      <div className="section5-card">
        <div className="section5-card-image">
          <div className="discount">
            <p>-25%</p>
          </div>
          <div className="heart" onClick={props.setFavorite}>
            {props.heart}
          </div>
          <img src={props.img} alt="" draggable="false" />
        </div>

        <div className="section5-card-text">
          <h1>{props.title}</h1>
          <div className="d-flex">
            <p>UNIT1</p>
            <AiFillStar />
            <p>{props.rating}</p>
          </div>
          <div className="section5-card-pricedifference">
            <h2>{props.oldprice}</h2>
            <h2>{props.newprice}</h2>
          </div>
          <div className="sold">
            <p>Sold:</p>
            <p>{props.sold}</p>
          </div>

          <div className="section5-card-bottom">
            <div className="section5-card-bottom-leftside">
              <button className="increment" onClick={props.decrement}>
                -
              </button>
              <p>{props.quantity}</p>
              <button className="increment" onClick={props.increment}>
                +
              </button>
            </div>
            <p>
              Add To Cart <FaShoppingCart />
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
}
