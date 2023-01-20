import React from "react";
import "./Section6.css";
import Section6Leftside from "./Section6Leftside/Section6Leftside";
import Section6Rightside from "./Section6Rightside/Section6Rightside";

export default function Section6() {
  return (
    <section className="section6">
      <div className="container">
        <div className="section6-main">
          <img src={require("../../images/section4-bg.png")} alt="" />
          <Section6Leftside />
          <Section6Rightside />
        </div>
      </div>
    </section>
  );
}
