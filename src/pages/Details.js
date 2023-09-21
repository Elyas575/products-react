import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GenerateStars from '../layout/Stars/Stars';
import LoadingIndicator from '../components/Loading/LoadingIndicator';

const CardDetailsPage = () => {
  const { cardId } = useParams();


    const [loadedCards,setLoadedCards] = useState();
    let url = `https://tap-web-1.herokuapp.com/topics/details/${cardId}`;
    useEffect(() => {
      fetch(url).then( response => {
        return response.json();
      }).then(data => {
        console.log(data);
  
        setIsLoading(false)
        setLoadedCards(data);
        console.log(loadedCards)
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
            <p class="category-title">{loadedCards.category}</p>
            <h2 class="category-name">
              <b>{loadedCards.title}</b>
            </h2>
            <div class="stars-product-container">
            <GenerateStars ratings={loadedCards.rating}/>
            </div>

            <p class="topic-text">{loadedCards.description}</p>
          </div>

          <div class="product-card">
            <img class="product-image" src={require(`../Images/${loadedCards.image}`)} alt={loadedCards.title} />

            <div class="product-lower-container">
              <div class="product-author-container">
                <p class="product-author">
                  <span class="author-category"> {loadedCards.topic} </span>
                  by 
                  <a href=""> {loadedCards.name} </a>
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
              {loadedCards.subtopics.map((subtopic, index) => (
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