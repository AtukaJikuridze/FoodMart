import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Section1.css";
import Section1Card from "./Section1Card/Section1Card";
import Section1Header from "../SectionHeader/SectionHeader";

export default function Section1() {
  return (
    <section className="section1">
      <Container>
        <Section1Header category={"Category"} title={"View All Categories"} />
        <Row>
          <Section1Card
            categoryImg={require("./Section1-images/broccoli.png")}
            categoryTitle={"Fruits & Veges"}
          />

          <Section1Card
            categoryImg={require("./Section1-images/bread baguette.png")}
            categoryTitle={"Breads & Sweets"}
          />

          <Section1Card
            categoryImg={require("./Section1-images/wine glass bottle.png")}
            categoryTitle={"Wine Drinks"}
          />

          <Section1Card
            categoryImg={require("./Section1-images/soft drinks bottle 1.png")}
            categoryTitle={"Oil & Ghree"}
          />

          <Section1Card
            categoryImg={require("./Section1-images/bread herb flour.png")}
            categoryTitle={"Natural Herbs"}
          />

          <Section1Card
            categoryImg={require("./Section1-images/animal products drumsticks.png")}
            categoryTitle={"Raw Meet"}
          />
        </Row>
      </Container>
    </section>
  );
}
