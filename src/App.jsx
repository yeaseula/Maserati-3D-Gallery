import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import Showroom from '../pages/Showroom'
import NavBar from '../components/NavBar'
import LoadingPage from "../components/LoadingPage";

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

function AppInner() {

  const location = useLocation();
  const [loadState,setLoadState] = useState(false)
  const [currentlocation,setCurrentLocation] = useState('cielo');

  useEffect(()=>{
    if (location.pathname === '/levante') setCurrentLocation('levante');
    else setCurrentLocation('cielo');
  },[location.pathname])

  return (
        <>
          <LoadingPage loadState={loadState}/>
          <header>
            <NavBar loadState={loadState} currentlocation={currentlocation}/>
          </header>
          <main>
            <Showroom product={currentlocation} loadState={loadState} setLoadState={setLoadState} setCurrentLocation={setCurrentLocation}/>
          </main>
        </>
  )
}

export default App