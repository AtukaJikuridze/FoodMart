import React from "react";
import "./HeaderRightsideCard.css";
import { FaArrowRight } from "react-icons/fa";
export default function HeaderRightsideCard(props: {
  url: string;
  discount: string;
  title: string;
  bgc: string;
}) {
  return (
    <div
      className="HeaderRightsideCard"
      style={{ backgroundImage: props.url, backgroundColor: props.bgc }}
    >
      <p>{props.discount}</p>
      <h1>{props.title}</h1>
      <p>
        shop the category <FaArrowRight />
      </p>
    </div>
  );
}
