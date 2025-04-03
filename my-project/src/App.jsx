import AboutUs from "./components/AboutUs";
import Domains from "./components/Domains";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from 'react'
import Ourteam from "./components/Ourteam";
import Footer from "./components/Footer";
import { Element } from "react-scroll";




export default function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Element name="about"><AboutUs /></Element>
      <Element name="events"><Events/></Element>
       <Element name="ourteam"><Ourteam/></Element> 
      <Footer/>
  </div>
  )
}