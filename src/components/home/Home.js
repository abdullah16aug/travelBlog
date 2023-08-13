import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Cards from "../card/Cards";
import { fetchCardsAsync, selectCards, deleteCardAsync } from "./cardSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const navigate=useNavigate()
  useEffect(() => {
    if (token) {
      dispatch(fetchCardsAsync());
    }else{
      navigate('/login')
    }
  }, [dispatch, token]);

  return (
    <div className="dark:bg-dark-600">
      <Navbar />
    
      {token ? (
        <div className="grid grid-cols-3">
          {Array.isArray(cards) ? (
            cards.map((item) => (
              <Cards
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                author={item.author}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <div>
      {  navigate('/login')}
          </div>
      )}
    </div>
  );
};

export default Home;
