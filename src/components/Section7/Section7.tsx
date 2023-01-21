import React from "react";
import "./Section7.css";
import { Container, Row } from "react-bootstrap";
import Section7Card from "./Section7Card/Section7Card";

export default function Section7() {
  return (
    <section className="section7">
      <Container>
        <Row>
          <Section7Card
            cls=""
            title="Right way to preserve the fruits & other organics"
            img={require("../../images/section7-1.png")}
          />

          <Section7Card
            cls="broccoli"
            title="Right way to preserve the fruits & other organics"
            img={require("../../images/section7-2.png")}
          />

          <Section7Card
            cls=""
            title="Right way to preserve the fruits & other organics"
            img={require("../../images/section7-3.png")}
          />
        </Row>
      </Container>
    </section>
  );
}
