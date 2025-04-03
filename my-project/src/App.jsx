import AboutUs from "./components/AboutUs";
import Domains from "./components/Domains";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from 'react'
import Ourteam from "./components/Ourteam";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <Events/>
      <Ourteam/>
      <Footer/>
    </>
  )
}