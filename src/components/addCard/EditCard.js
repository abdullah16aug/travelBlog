import { useState, useEffect } from "react";
import { clearCards, createCardsAsync, updateCardsAsync } from "../home/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCardById } from "../home/cardSlice";
const EditCard = () => {
    
  let navigate = useNavigate();
  const dispatch = useDispatch();
    const item=useSelector(selectCardById)
    // const title = item ? item.title : '';
    // const description = item ? item.description : '';
    // const author = item ? item.author : '';
  const [formData, setFormData] = useState({
    id:"",
title:"",
description:"",
author:""
  });
  
useEffect(()=>{
 if(item){
  setFormData({
    id:item.id,
    title: item.title,
    description: item.description,
    author: item.author
  });
  // console.log(formData)
 }
},[item])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    // console.log(formData);
    dispatch(clearCards)
  
    dispatch(updateCardsAsync(formData));
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 ">
   
      <form
        className=" dark:bg-gray-800 max-w-md mx-auto bg-white p-8 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Card</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="author" className="block text-gray-700 font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
