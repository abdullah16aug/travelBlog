import React from "react";
import { useDispatch } from "react-redux";
import { deleteCardAsync, fetchCardByIdAsync} from "../home/cardSlice";
import { useNavigate } from "react-router-dom";


const Cards = (props) => {
   const navigate=useNavigate()
  const dispatch=useDispatch()
  
  const handleCard=(e,id)=>{
dispatch(fetchCardByIdAsync(id))
navigate("/posts")
  }
  const handleRemove=(e,id)=>{
    dispatch(deleteCardAsync(id))
    console.log(e,id)
  }
  return (
    <>


        <div className=" text-full items-center justify-center px-4 py-6 text-center dark:bg-gray-900 sm:text-left md:max-xl:flex">
            <div className="">
                <div className="tmax-w-xs h-64 flex flex-col justify-between sm:w-72  bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div className="">
                      <div className="flex items-end space-x-40">

                      <h4 className="text-gray-800 dark:text-yellow-300 font-bold mb-1">{props.title}</h4>
                      <button type="button" className="mx-36 mb-5 text-red-600" onClick={(e)=>handleRemove(e,props.id)}>X</button>
                      </div>
                        <p className="text-gray-800 dark:text-gray-100 text-sm w-64 line-clamp-6 overflow-hidden">{props.description}</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between text-gray-800">
                            <p className="text-sm dark:text-gray-100">{props.createdAt}</p>
                            <p className="text-sm dark:text-white">{props.author}</p>
                            <button onClick={e=>handleCard(e,props.id)} className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       

    
    </>
  );
};

export default Cards;
