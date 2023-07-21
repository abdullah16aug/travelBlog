import React from "react";
import { useSelector } from "react-redux";

const Cards = (props) => {
  
  return (
    <>
    {/* <div className="mt-6  justify-center grid grid-cols-3 gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <image>{props.image}</image>
      <span>{props.author}</span>
    </div> */}
   


        <div className="text-center sm:text-left md:max-xl:flex w-full dark:bg-gray-900  py-6 px-4 justify-center items-center ">
            <div className="">
                <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                    <div>
                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{props.title}</h4>
                        <p className="text-gray-800 dark:text-gray-100 text-sm w-64 line-clamp-6 overflow-hidden">{props.description}</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between text-gray-800">
                            <p className="text-sm dark:text-gray-100">{props.createdAt}</p>
                            <p className="text-sm dark:text-white">{props.author}</p>
                            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    
    </>
  );
};

export default Cards;
