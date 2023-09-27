import React from "react";
import Card from "./Card"

const CardsContainer = ({ data })  => {
  if (data === null || data === undefined) {
    return <p>Loading...</p>;
  }

  return ( <div className="wrapper-grid">
      {data.map( (cardData) => (
        <Card key={cardData.id} cardData={cardData} />
      ))
    }
    </div>
  );
}

export default CardsContainer;