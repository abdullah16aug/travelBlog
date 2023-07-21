import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Cards from "../card/Cards";
import { fetchCardsAsync, selectCards } from "./cardSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "./cardsAPI";
import { useEffect } from "react";

const card = [
  {
    title: "Amar",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda, earum debitis et cumque quos quisquam libero labore, commodi perspiciatis facere reiciendis natus ex quam? Suscipit mollitia dignissimos totam facere fuga beatae officia facilis, delectus vero possimus similique ipsam blanditiis nesciunt incidunt laborum doloremque, recusandae magnam reiciendis repudiandae vitae! Magni quod ex, laborum officiis assumenda voluptatibus iste facilis tenetur incidunt perspiciatis voluptatem ea doloribus earum saepe nostrum nemo et magnam similique eum cum explicabo ipsa consectetur. Dolorum beatae error obcaecati minus adipisci totam molestias veritatis nihil iure voluptatum id dolore voluptates aliquam nulla minima nemo, architecto praesentium suscipit, sit velit accusantium natus provident quaerat. Impedit porro omnis esse molestiae magnam eveniet est dolor consequuntur alias accusamus quia, iste dolore hic at voluptatem cum!",
    image: "image ",
    author: "author",
  },
  {
    title: "Amar",
    description: "description",
    image: "image ",
    author: "author",
  },
  {
    title: "Amar",
    description: "description",
    image: "image ",
    author: "author",
  },
  {
    title: "Amar",
    description: "description",
    image: "image ",
    author: "author",
  },
];
const Home = () => {
  const dispatch=useDispatch()
  const cards=useSelector(selectCards)
  useEffect(() => {
   dispatch(fetchCardsAsync())
   
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-3 dark:bg-gray-900 ">
        
      {cards.map((item, index) => {
        return (
          <Cards
          key={item.index}
          title={item.title}
          description={item.description}
          image={item.image}
          author={item.author}
          />
          );
        })}
        </div>
    </>
  );
};

export default Home;
