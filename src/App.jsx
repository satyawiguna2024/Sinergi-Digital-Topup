import { Route, Routes } from "react-router";
import { Games, Home } from "./pages";
import GamesTopUp from "./pages/game_topup/GamesTopUp";
import MainLayouts from "./MainLayouts";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayouts>
              <Home />
            </MainLayouts>
          }
        />
        <Route
          path="/games"
          element={
            <MainLayouts>
              <Games />
            </MainLayouts>
          }
        />
        <Route
          path="/games/topup/:id"
          element={
            <MainLayouts>
              <GamesTopUp />
            </MainLayouts>
          }
        />

        {/* not found pages */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
