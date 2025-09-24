import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Showroom from '../pages/Showroom'
import NavBar from '../components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

function AppInner() {
  const location = useLocation();
  const [currentlocation,setCurrentLocation] = useState('cielo');

  useEffect(()=>{
    if (location.pathname === '/levante') setCurrentLocation('levante');
    else setCurrentLocation('cielo');
  },[location.pathname])

  return (
        <>
          <NavBar currentlocation={currentlocation}/>
          <h2 className="sr-only">마세라티 3D 전시장 - {currentlocation} 모델</h2>
          <Showroom product={currentlocation} setCurrentLocation={setCurrentLocation}/>
        </>
  )
}

export default App