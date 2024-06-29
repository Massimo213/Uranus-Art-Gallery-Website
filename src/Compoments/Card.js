import React from "react";
import CardItem from "./CardItem";
import "./Card.css"

function Card() {
  return (
    <div className="cards">
      <h1>
        Discover our top-selling art pieces, each uniquely crafted to add
        elegance and creativity to any space.
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-4.jpeg"
              text="The Fallen Angel.A simple MASTERPIECE"
              label="BestSeller"
              path="/services"
            />
            <CardItem
              src="/images/img-3.jpeg"
              text="The Monalisa. A simple definition of PERFECTION"
              label="Most Popular"
              path="/services"
            />
            <CardItem
              src="/images/img-5.jpeg"
              text="Together in Silence
              A moment shared, unspoken."
              label="Liked by the public"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpeg"
              text="Silent Presence,Capturing emotion without revealing the face."
              label="Liked by the public"
              path="/services"
            />
            <CardItem
              src="/images/img-1.jpeg"
              text="Harmony of Keys,A visual symphony of music and artistry."
              label="Liked by the public"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
