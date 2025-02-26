import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Social from "./Components/Social";
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/social",
      element: (
        <>
          <Navbar />
          <Social />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
