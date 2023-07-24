import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Cards from "../card/Cards";
import { fetchCardsAsync, selectCards, deleteCardAsync } from "./cardSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";



const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  useEffect(() => {
    dispatch(fetchCardsAsync());
  }, [dispatch]);
  return (
    <div className="dark:bg-dark-600">
      <Navbar />
    
<div className="grid grid-cols-3">

        {cards.map((item) => {
          return (
            <Cards
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              author={item.author}
            />
          );
        })}
  </div>
      
    </div>
  );
};

export default Home;
