import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Gallery from './Pages/Gallery'
import Tours from './Pages/Tours'
import About from './Pages/About'
import ResponsiveMenu from './Components/ResponsiveMenu'
import Hero from './Components/Hero';

const router = createBrowserRouter([
  {
    path : '/',
    element : <><Navbar/><Home/></>
  },
  {
    path : '/tours',
    element : <><Navbar/><Tours/></>
  },
  {
    path : '/gallery',
    element : <><Navbar/><Gallery/></>
  },
  {
    path : '/contact',
    element : <><Navbar/><Contact/></>
  },
  {
    path : '/about',
    element : <><Navbar/><About/></>
  },
]);

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
   
    
    
    
    {/* <h1>usman</h1> */}
    </>
  )
}

export default App;