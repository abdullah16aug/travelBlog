import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.js";
import UserCard from "./components/addCard/UserCard";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PostCard from "./components/addCard/PostCard";
import EditCard from "./components/addCard/EditCard.js";
import Calculator from "./components/calculator/Calculator";
import CardDetails from "./components/card/CardDetails";
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
  {
    path: "/edit",
    element: (
      <div>
        <div>
<Navbar></Navbar>
       <EditCard></EditCard>
        </div>
      </div>
    ),
  },
  {
    path: "/calculator",
    element: (
      <div>
        <div>
<Navbar></Navbar>
       <Calculator></Calculator>
        </div>
      </div>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <div>
        <div>
<Navbar></Navbar>
<CardDetails>p</CardDetails>
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
