import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterLeftside from "./FooterLeftside/FooterLeftside";
import "./Footer.css";
import FooterRightside from "./FooterRightside/FooterRightside";
import FooterBottom from "./FooterBottom/FooterBottom";
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <FooterLeftside />
          <FooterRightside />
        </Row>
        <FooterBottom />
      </Container>
    </footer>
  );
}
