import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Container, Row } from "react-bootstrap";
import "./Section2.css";
import Section2Card from "./Section2Card/Section2Card";
export default function Section2() {
  return (
    <section className="section2">
      <Container>
        <SectionHeader
          title={"view all offers"}
          category={"Newly Arrived Brands"}
        />
        <Row>
          <Section2Card
            title="Amber Jar"
            description={"Honey best nectar you wish to get"}
            img={require("./Section2-images/first-image.png")}
          />

          <Section2Card
            title="Pure Herb"
            description={"Pure herb the only natural brand"}
            img={require("./Section2-images/second-image.png")}
          />

          <Section2Card
            title="Tuna"
            description={"Where's tuna? Tuna, clear choice!"}
            img={require("./Section2-images/third-image.png")}
          />

          <Section2Card
            title="Hotz"
            description={"the one junk food that’s natural"}
            img={require("./Section2-images/fourth-image.png")}
          />
        </Row>
      </Container>
    </section>
  );
}
