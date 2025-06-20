import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Feature from './Pages/Feature'
import DemoBooking from './Pages/DemoBooking'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/demo-booking" element={<DemoBooking />} />
      </Routes>
    </Router>
  )
}

export default App