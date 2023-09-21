import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GenerateStars from '../layout/Stars/Stars';
import LoadingIndicator from '../components/Loading/LoadingIndicator';

const CardDetailsPage = () => {
  const { cardId } = useParams();


    const [loadedCard,setLoadedCard] = useState();
    let url = `https://tap-web-1.herokuapp.com/topics/details/${cardId}`;
    useEffect(() => {
      fetch(url).then( response => {
        return response.json();
      }).then(data => {
        setIsLoading(false)
        setLoadedCard(data);
      });
    },[]);
  
  const [isLoading,setIsLoading] = useState(true);
  
  if(isLoading){
    return <LoadingIndicator/>
  } 

  return (
    <div>
      <div class="main-1">
        <div class="content">
          <div class="box-details-upper">
            <p class="category-title">{loadedCard.category}</p>
            <h2 class="category-name">
              <b>{loadedCard.title}</b>
            </h2>
            <div class="stars-product-container">
            <GenerateStars ratings={loadedCard.rating}/>
            </div>

            <p class="topic-text">{loadedCard.description}</p>
          </div>

          <div class="product-card">
            <img class="product-image" src={require(`../Images/${loadedCard.image}`)} alt={loadedCard.title} />

            <div class="product-lower-container">
              <div class="product-author-container">
                <p class="product-author">
                  <span class="author-category"> {loadedCard.topic} </span>
                  by 
                  <a href=""> {loadedCard.name} </a>
                </p>

                <div class="product-card-details">
                  <p>Interested about this topic?</p>
                  <button class="add-favorites-button">
                    <div class="inner-content">
                      Add to Favourites
                      <ion-icon
                        class="add-to-favorites-icon"
                        name="heart-outline"
                      ></ion-icon>
                    </div>
                  </button>
                  <p class="unlimited-credits">Unlimited credits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-2">
        <div class="content">
          <div class="box-details-upper-2" id="boxDetailsUpper">
            <h2 id="subTopics">HTML Sub Topics</h2>
            <ul>
              {loadedCard.subtopics.map((subtopic, index) => (
                <li key={index}>
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                  {subtopic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;