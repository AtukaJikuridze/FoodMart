import React from "react";
import "./Section8.css";
import { Container } from "react-bootstrap";
import Section8Main from "./Section8Main/Section8Main";
export default function Section8() {
  return (
    <section className="section8">
      <Container>
        <div className="section8-main">
          <img className="lb-img"
            src={require("./Section8Images/section8-leftbottom.png")}
            alt=""
          />

          <img src={require("./Section8Images/section8-righttop.png")} alt="" />

          <img
            src={require("./Section8Images/section8-rightbottom.png")}
            alt=""
          />
          <Section8Main />
        </div>
      </Container>
    </section>
  );
}
