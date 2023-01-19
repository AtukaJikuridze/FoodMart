import React from "react";
import Section3Header from "./Section3Header/Section3Header";
import { useState, useRef } from "react";
import "./Section3.css";
import { Container, Row } from "react-bootstrap";
import Section3Card from "./Section3Card/Section3Card";
import img1 from "./Section3-images/section3-1.png";
import img2 from "./Section3-images/section3-2.png";
import img3 from "./Section3-images/section3-3.png";
import img4 from "./Section3-images/section3-4.png";
import img5 from "./Section3-images/section3-5.png";
import img6 from "./Section3-images/section3-6.png";
import img7 from "./Section3-images/section3-7.png";
import img8 from "./Section3-images/section3-8.png";
import img9 from "./Section3-images/section3-9.png";
import img10 from "./Section3-images/section3-10.png";

export default function Section3() {
  const [active, setActive] = useState(1);
  const [filt, setFilt] = useState<any>(["all"]);

  const [cardInformation, setCardInformation] = useState([
    {
      image: img1,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 0,
      filt: ["juice", "all"],
    },
    {
      image: img2,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 1,
      filt: ["veggie", "all"],
    },

    {
      image: img3,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 2,
      filt: ["veggie", "all"],
    },

    {
      image: img4,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 3,
      filt: ["juice", "all"],
    },

    {
      image: img5,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 4,
      filt: ["veggie", "all"],
    },

    {
      image: img6,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 5,
      filt: ["sweet", "all"],
    },
    {
      image: img7,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 6,
      filt: ["fruit", "all"],
    },

    {
      image: img8,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 7,
      filt: ["juice", "all"],
    },
    {
      image: img9,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 8,
      filt: ["juice", "all"],
    },
    {
      image: img10,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 9,
      filt: ["fruit", "all"],
    },

    {
      image: img10,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 10,
      filt: ["fruit", "all"],
    },

    {
      image: img10,
      title: "Sunstar Fresh Melon Juice",
      weight: "1 UNIT",
      rating: 4.5,
      price: "$18.00",
      quantity: 1,
      id: 11,
      filt: ["fruit", "all"],
    },
  ]);
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
  console.log(filt);

  return (
    <section className="section3">
      <Section3Header
        filt={filt}
        setFilt={setFilt}
        active={active}
        setActive={setActive}
      />
      <Container>
        <Row>
          {cardInformation
            ?.filter((e) => e.filt[0] === filt.join(""))
            .map((card) => (
              <Section3Card
                image={card.image}
                id={card.id}
                title={card.title}
                weight={card.weight}
                rating={card.rating}
                price={card.price}
                quantity={card.quantity}
                quantityUp={() => quantityUp(card.id)}
                quantityDown={() => quantityDown(card.id)}
              />
            ))}
        </Row>
      </Container>
    </section>
  );
}
