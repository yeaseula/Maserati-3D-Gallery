
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showroom from '../pages/Showroom'
import NavBar from '../components/NavBar'
import LoadingPage from "../components/LoadingPage";
import { ShowroomProvider } from "../components/data/context";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppInner />}></Route>
        <Route path="/levante" element={<AppInner />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppInner() {

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