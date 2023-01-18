import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLeftsideCard from "./HeaderLeftsideCard/HeaderLeftsideCard";
import HeaderRightsideCard from "./HeaderRightsideCard/HeaderRightsideCard";
import vegetablesImage from "../../images/headerVegetables.png";
import breadsImage from "../../images/HeaderBreads.png";
export default function Header() {
  return (
    <header>
      <Navbar />
      <Container>
        <Row>
          <Col lg={7} md={12}>
            <HeaderLeftsideCard />
          </Col>
          <Col lg={5} md={12}>
            <HeaderRightsideCard
              bgc={"#EEF5E4"}
              title={"Fruits & Vegetables"}
              discount={"20% Off"}
              url={`url(${vegetablesImage})`}
            />
            <HeaderRightsideCard
              bgc={"#F9EBE7"}
              title={"Baked Products"}
              discount={"15% Off"}
              url={`url(${breadsImage})`}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
