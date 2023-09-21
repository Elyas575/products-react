import React from "react";
import { Link } from "react-router-dom";
import GenerateStars from "../../layout/Stars/Stars";

const Card = ({ cardData }) => {

  return (
    <Link to={`/products-react//${cardData.id}`} className="card-link">
      <div className="card">
        <img className="banner-image" src={require(`../../Images/${cardData.image}`)} alt={cardData.title}/>
        <div className="card-details">
          <div className="card-title">
            <p className="name">
              <b>{cardData.category}</b>
            </p>
            <p className="description">{cardData.topic}</p>
          </div>
          <div className="stars-container">
            <GenerateStars ratings={cardData.rating}/>
          </div>
          <p className="author">Author: {cardData.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

