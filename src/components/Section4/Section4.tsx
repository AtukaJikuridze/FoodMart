import React from "react";
import "./Section4.css";
import Section4Leftside from "./Section4Leftside/Section4Leftside";
import Section4Rightside from "./Section4Rightside/Section4Rightside";
import { Container, Row } from "react-bootstrap";
export default function Section4() {
  return (
    <section className="section4">
      <img
        className="section4-bg"
        src={require("../../images/section4-bg.png")}
        alt=""
      />
      <Container>
        <Row>
          <Section4Leftside />
          <Section4Rightside />
        </Row>
      </Container>
    </section>
  );
}
