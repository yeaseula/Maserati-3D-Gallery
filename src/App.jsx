
import { BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Showroom from '../pages/Showroom'
import NavBar from '../components/NavBar'
import LoadingPage from "../components/LoadingPage";
import { ShowroomProvider } from "../components/data/context";
import { useShowroom } from "../components/data/context";

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

function AppInner() {

  const location = useLocation();

  return (
        <ShowroomProvider>
          <LoadingPage/>
          <header>
            <NavBar/>
          </header>
          <main>
            <Showroom/>
          </main>
        </ShowroomProvider>
  )
}

export default App