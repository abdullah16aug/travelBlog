import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.js";
import UserCard from "./components/addCard/UserCard";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PostCard from "./components/addCard/PostCard";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/profile",
    element: (
      <div>
        <Navbar></Navbar>
        <UserCard></UserCard>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login></Login>
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup></Signup>
      </div>
    ),
  },
  {
    path: "/posts",
    element: (
      <div>
        <div>
<Navbar></Navbar>
        <PostCard></PostCard>
        </div>
      </div>
    ),
  },
]);
function App() {
  return (
    <>
   



      <RouterProvider router={router} />

  
    </>
  );
}

export default App;
