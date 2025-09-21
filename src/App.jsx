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
            <Showroom product={currentlocation} setCurrentLocation={setCurrentLocation}/>
        </>
  )
}

export default App