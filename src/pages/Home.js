import CardsContainer from "../components/Cards/CardsContainer";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import SearchFilterSection from "../components/SearchFilter/SearchFilter";
const AllCardsPage = () => {

  const [loadedCards,setLoadedCards] = useState();
  const [isLoading,setIsLoading] = useState(true);

  
  const url = "https://tap-web-1.herokuapp.com/topics/list";
  useEffect(() => {
    fetch(url).then( response => {
      return response.json();
    }).then(data => {
      setIsLoading(false)
      setLoadedCards(data);
    });
  },[]);

if(isLoading){
  return <LoadingIndicator />
} 

  return (
    <div className="container">
        <div className="main">
          <div>
                <SearchFilterSection />
          </div>
        <div>
          <CardsContainer data={loadedCards} /> 
        </div>
      </div>
    </div>

  );
};

export default AllCardsPage;