import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showroom from '../pages/Showroom'
import NavBar from '../components/NavBar'

function App() {

  return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Showroom key="levante" product="levante"/>} />
                <Route path="/cielo" element={<Showroom key="cielo" product="cielo"/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App