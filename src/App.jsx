import { Route, Routes } from "react-router";
import { Games, Home } from "./pages";
import GamesTopUp from "./pages/game_topup/GamesTopUp";
import MainLayouts from "./MainLayouts";
import NotFound from "../NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
