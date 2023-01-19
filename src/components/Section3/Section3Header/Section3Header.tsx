import React from "react";
import { useState } from "react";
import "./Section3Header.css";

export default function Section3Header(props: {
  active: number;
  setActive: any;
  filt: any;
  setFilt: any;
}) {
  function activeStatus(activeNumber: number) {
    props.setActive(activeNumber);
    if (activeNumber === 2) {
      props.setFilt(["fruit"]);
    } else if (activeNumber === 3) {
      props.setFilt(["juice"]);
    } else if (activeNumber === 4) {
      props.setFilt(["veggie"]);
    } else if (activeNumber === 5) {
      props.setFilt(["meat"]);
    } else if (activeNumber === 1) {
      props.setFilt(["all"]);
    }
  }

  return (
    <div className="container">
      <div className="section3-header">
        <h1>Trending Products</h1>
        <ul>
          {props.active === 1 ? (
            <li className="active">All</li>
          ) : (
            <li onClick={() => activeStatus(1)}>All</li>
          )}

          {props.active === 2 ? (
            <li className="active">FRUITS </li>
          ) : (
            <li onClick={() => activeStatus(2)}>FRUITS</li>
          )}

          {props.active === 3 ? (
            <li className="active">JUICES</li>
          ) : (
            <li onClick={() => activeStatus(3)}>JUICES</li>
          )}

          {props.active === 4 ? (
            <li className="active"> VEGETABLES </li>
          ) : (
            <li onClick={() => activeStatus(4)}>VEGETABLES</li>
          )}

          {props.active === 5 ? (
            <li className="active">RAW MEATS</li>
          ) : (
            <li onClick={() => activeStatus(5)}>RAW MEATS</li>
          )}
        </ul>
      </div>
      <hr />
    </div>
  );
}

//
// .map((card) => (
//   <Section3Card
//     image={card.image}
//     id={card.id}
//     title={card.title}
//     weight={card.weight}
//     rating={card.rating}
//     price={card.price}
//     quantity={card.quantity}
//     quantityUp={() => quantityUp(card.id)}
//     quantityDown={() => quantityDown(card.id)}
//   />
// ))
