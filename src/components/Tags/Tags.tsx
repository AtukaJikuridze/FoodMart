import React from "react";
import Tag from "./Tag";
import "./Tags.css";

export default function Tags() {
  return (
    <div className="container">
      <h1 className="tags-h1">People are also looking for</h1>
      <div className="tags-main">
        <Tag title="Blue diamon almonds" />
        <Tag title="Angie's Boomchickapop Corn" />
        <Tag title="Salty kettle Corn" />
        <Tag title="Chobani Greek Yogurt" />
        <Tag title="Sweet Vanilla Yogurt" />
        <Tag title="Foster Farms Takeout Crispy wings" />
        <Tag title="Warrior Blend Organic" />
        <Tag title="Encore Seafoods Stuffed Alaskan Salmon" />
        <Tag title="Chao Cheese Creamy" />
        <Tag title="Chicken meatballs" />
        <Tag title="Werther's caramel hard candies" />
        <Tag title="Mate coffee creamer" />
        <Tag title="Pasture raised chicken eggs" />
        <Tag title="Tree top fruit water" />
        <Tag title="Natural Vanilla Light Roast Coffee" />
        <Tag title="Sweet Vanilla essence Yogurt" />
      </div>
    </div>
  );
}
