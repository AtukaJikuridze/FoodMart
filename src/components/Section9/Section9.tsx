import React from "react";
import "./Section9.css";
import { Container, Row } from "react-bootstrap";
import Section9Card from "./Section9Card/Section9Card";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Section9() {
  return (
    <section className="section9">
      <Container>
        <Row>
          <Section9Card
            title="Free Delivery"
            icon={<AiOutlineShoppingCart />}
          />
          <Section9Card
            title="100% secure payment"
            icon={<MdOutlineSecurity />}
          />
          <Section9Card title="Quality guarantee" icon={<RiMedalLine />} />
          <Section9Card title="guaranteed savings" icon={<TbReportMoney />} />
        </Row>
      </Container>
    </section>
  );
}
