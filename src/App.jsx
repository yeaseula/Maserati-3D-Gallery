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
  const [currentlocation,setCurrentLocation] = useState('levante');

  useEffect(()=>{
    if (location.pathname === '/cielo') setCurrentLocation('cielo');
    else setCurrentLocation('levante');
  },[location.pathname])

  return (
        <>
            <NavBar currentlocation={currentlocation}/>
            <Showroom product={currentlocation} setCurrentLocation={setCurrentLocation}/>
        </>
  )
}

export default App