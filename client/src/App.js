import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Porfolio from './components/Portfolio/Porfolio';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Porfolio/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App