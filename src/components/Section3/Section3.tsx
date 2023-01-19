import React from "react";
import Section3Header from "./Section3Header/Section3Header";
import { useState } from "react";
import "./Section3.css";
import { Container, Row } from "react-bootstrap";
import { cardArray } from "./Section3Cards";
import Section3Card from "./Section3Card/Section3Card";

export default function Section3() {
  const [cardInformation, setCardInformation] = useState(cardArray);
  const [active, setActive] = useState(1);
  const [filt, setFilt] = useState<any>("all");

  function filterCondition() {
    if (filt === "all") {
      return cardInformation?.map((card) => (
        <Section3Card
          image={card.image}
          id={card.id}
          title={card.title}
          weight={card.weight}
          rating={card.rating}
          price={card.price}
          className={card.className}
          quantity={card.quantity}
          quantityUp={() => quantityUp(card.id)}
          quantityDown={() => quantityDown(card.id)}
        />
      ));
    } else {
      return cardInformation
        ?.filter((e) => e.filt === filt)
        .map((card) => (
          <Section3Card
            image={card.image}
            className={card.className}
            id={card.id}
            title={card.title}
            weight={card.weight}
            rating={card.rating}
            price={card.price}
            quantity={card.quantity}
            quantityUp={() => quantityUp(card.id)}
            quantityDown={() => quantityDown(card.id)}
          />
        ));
    }
  }

  function quantityDown(num: any) {
    cardInformation[num].quantity > 0
      ? (cardInformation[num].quantity -= 1)
      : (cardInformation[num].quantity = 0);
    setCardInformation([...cardInformation]);
  }

  function quantityUp(num: any) {
    cardInformation[num].quantity += 1;
    setCardInformation([...cardInformation]);
  }

  return (
    <section className="section3">
      <Section3Header
        filt={filt}
        setFilt={setFilt}
        active={active}
        setActive={setActive}
      />
      <Container>
        <Row>{filterCondition()}</Row>
      </Container>
    </section>
  );
}
