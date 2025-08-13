import { Route, Routes } from "react-router";
import { Games, Home } from "./pages";
import GamesTopUp from "./pages/game_topup/GamesTopUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return(
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/topup/:id" element={<GamesTopUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}