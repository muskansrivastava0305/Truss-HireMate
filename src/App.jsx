import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Feature from './Pages/Feature'
import DemoBooking from './Pages/DemoBooking'
import Footer from './Pages/Footer'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
    <Header />
    <Home />
    <Feature />
    <DemoBooking />
    <Contact />
    <Footer />

    </>
  )
}

export default App