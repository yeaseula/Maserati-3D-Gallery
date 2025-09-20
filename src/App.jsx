import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Showroom from '../pages/Showroom'
import NavBar from '../components/NavBar'

function App() {
  const [currentlocation,setCurrentLocation] = useState('levante')
  return (
        <BrowserRouter>
            <NavBar currentlocation={currentlocation}/>
            <Routes>
                <Route path="/" element={<Showroom key="levante" product="levante" setCurrentLocation={setCurrentLocation}/>} />
                <Route path="/cielo" element={<Showroom key="cielo" product="cielo" setCurrentLocation={setCurrentLocation}/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App