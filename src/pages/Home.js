import React from "react";
import CardsContainer from "../components/Cards/CardsContainer";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import SearchFilterSection from "../components/SearchFilter/SearchFilter";
import { LoadedCards } from "../API/FetchCards";

const AllCardsPage = () => {
  const [loadedCards, setLoadedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewTopics, setViewTopics] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [filterOptions, setFilterOptions] = useState(null);

  useEffect(() => {
    LoadedCards(search)
      .then((data) => {
        setLoadedCards(data);
        setIsLoading(false); 

      })
      .catch((error) => {
        setError(error);
        setIsLoading(false); 
        
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (loadedCards) {
      let categories = new Set(); 
      loadedCards.forEach(card => categories.add(card.category));
      setFilterOptions([...categories]);
      console.log(categories)
  
      let updatedCards = [...loadedCards];
      if (sortBy) {
        updatedCards.sort((a, b) => {
          switch (sortBy) {
            case "AUTHOR":
              return a['name'] < b['name'] ? -1 : 1;
            case "TOPIC":
              return a['topic'] < b['topic'] ? -1 : 1;
            default:
              throw `unknown sort by object ${sortBy}`;
          }
        });
      }
  
      if (filterBy) {
        updatedCards = updatedCards.filter(card => card.category === filterBy);
      }
      setViewTopics(updatedCards);
    }
  }, [loadedCards, sortBy, filterBy]);


  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container">
      <div className="main">
        <div>
          <SearchFilterSection
          value={search}
          onChangeSearch={ (event) => setSearch(event.target.value) } 

          label1="Sort By:"
          value1 ={sortBy}
          options1 = {[
            {title:"Default",value:""},
            {title:"Author",value:"AUTHOR"},
            {title:"Name",value:"TOPIC"},
          ]}
          onChange1={(event)=> { setSortBy(event.target.value)} }
          
          label2="Filter By"
          value2={filterBy}
          options2={filterOptions.map( category => ({title:category}))}
          onChange2={ (event) => {setFilterBy(event.target.value)}}/>

          

     


        </div>
        <div>
   
          {viewTopics ? <CardsContainer data={viewTopics} /> : <LoadingIndicator />}
        </div>
      </div>
    </div>
  );
};

export default AllCardsPage;