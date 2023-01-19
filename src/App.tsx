import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
