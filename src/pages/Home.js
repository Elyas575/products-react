import React from "react";
import CardsContainer from "../components/Cards/CardsContainer";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/Loading/LoadingIndicator";
import SearchFilterSection from "../components/SearchFilter/SearchFilter";
import { LoadedCards } from "../API/FetchCards";

const AllCardsPage = () => {
  const [loadedCards, setLoadedCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewTopics, setViewTopics] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState();
  const [filterBy, setFilterBy] = useState();
  const [filterOptions, setFilterOptions] = useState(null);

  useEffect(() => {
    LoadedCards(search)
      .then((data) => {
        setLoadedCards(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (loadedCards) {
      setViewTopics(loadedCards);
    }
  }, [loadedCards]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container">
      <div className="main">
        <div>
          <SearchFilterSection />
        </div>
        <div>
   
          {viewTopics ? <CardsContainer data={viewTopics} /> : <LoadingIndicator />}
        </div>
      </div>
    </div>
  );
};

export default AllCardsPage;