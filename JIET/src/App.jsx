import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navs'
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
   
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
