
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

// const PostCard=()=> {
//   return (
//     <form>
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
         

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
//                 author
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
//                   <input
//                     type="text"
//                     name="author"
//                     id="author"
//                     autoComplete="author"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="janesmith"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                Description
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Cover photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

      
       
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   )
// }

// export default PostCard
import React, { useState,useEffect } from 'react';
import { createCardsAsync } from '../home/cardSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const PostCard = () => {
const dispatch=useDispatch()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    console.log(formData);
    dispatch(createCardsAsync(formData))
  
    
  };
 
    
  

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 ">
      <form  className=" dark:bg-gray-800 max-w-md mx-auto bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Add New Card</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
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
          <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
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
          <label htmlFor="author" className="block text-gray-700 font-medium">Author</label>
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
         
          <button formAction='/'
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

export default PostCard;
