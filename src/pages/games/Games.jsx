import SliderImage from "./SliderImage";
import CardPopuler from "./CardPopuler";
import { FaGamepad } from "react-icons/fa";
import CardGames from "./CardGames";

export default function Games() {
  return (
    <>
      <div className="container-costume mx-auto">
        <SliderImage />

        {/* games */}
        <div className="flex items-center mx-2 mt-6 gap-x-2">
          <FaGamepad size={35} className="text-white" />
          <h3 className="font-raleway font-medium text-lg text-white">
            Game Populer
          </h3>
        </div>

        {/* card component */}
        <CardPopuler />

        <div className="mx-2 mt-10">
          <h3 className="font-raleway font-medium text-lg text-white">
            Semua Game
          </h3>
        </div>
      <div className="w-full h-[2px] bg-slate-500 my-2" />

        {/* card all games component */}
        <CardGames />
      </div>
    </>
  );
}
