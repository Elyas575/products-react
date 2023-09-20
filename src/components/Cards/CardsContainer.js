import React from "react";
import Card from "./Card"

const CardsContainer = ({ data })  => {
  return (
    <div className="wrapper-grid">
      {data.map( (cardData, index) => (
        <Card key={index} cardData={cardData} />
      ))
    }
    </div>
  );
}

export default CardsContainer;