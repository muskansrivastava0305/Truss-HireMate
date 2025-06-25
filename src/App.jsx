import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Feature from './Pages/Feature'
import DemoBooking from './Pages/DemoBooking'
import Footer from './Pages/Footer'
import Contact from './Pages/Contact'
import TestimonialSection from './Pages/Testimonial'

const App = () => {
  return (
    <>
   <>
  <Header />

  <div id="home">
    <Home />
  </div>

  <div id="features">
    <Feature />
  </div>

  <div id="demo">
    <DemoBooking />
  </div>

  <div id="testimonials">
    <TestimonialSection />
  </div>

  <div id="contact">
    <Contact />
  </div>

  <Footer />
</>


    </>
  )
}

export default App