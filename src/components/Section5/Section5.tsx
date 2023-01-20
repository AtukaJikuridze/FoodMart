import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Section5.css";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Section5Card from "./Section5Card/Section5Card";
import { Section5DATA } from "./Section5DATA";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Section5() {
  
  const [cards, setCards] = useState(Section5DATA);

  function quantityDown(num: any) {
    cards[num].quantity > 0
      ? (cards[num].quantity -= 1)
      : (cards[num].quantity = 0);
    setCards([...cards]);
  }

  function quantityUp(num: any) {
    cards[num].quantity += 1;
    setCards([...cards]);
  }

  function setFavorite(num: number) {
    cards[num].active = !cards[num].active;
    setCards([...cards]);
  }

  return (
    <section className="section5">
      <Container>
        <SectionHeader title="" category="Top offered products" />

        <Row>
          {cards.map((e) => (
            <Section5Card
              id={e.id}
              img={e.img}
              title={e.title}
              rating={e.rating}
              oldprice={e.oldprice}
              newprice={e.newprice}
              sold={e.sold}
              quantity={e.quantity}
              increment={() => quantityUp(e.id)}
              decrement={() => quantityDown(e.id)}
              heart={
                e.active ? (
                  <AiFillHeart style={{ color: "red" }} />
                ) : (
                  <AiOutlineHeart />
                )
              }
              setFavorite={() => setFavorite(e.id)}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
