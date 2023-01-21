import React from "react";
import "./Section8DownloadButtons.css";

export default function Section8DownloadButtons(props: {
  img: string;
  title: string;
}) {
  return (
    <div className="downloadBtn">
      <img src={props.img} alt="" />
      <div>
        <p>GET IT ON</p>
        <h5> {props.title}</h5>
      </div>
    </div>
  );
}
