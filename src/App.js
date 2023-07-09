import React from 'react';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Promo from './Promo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Promos" element={<Promo />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;