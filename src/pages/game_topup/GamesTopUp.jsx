import data from "../../json/data.json";
import { useParams } from "react-router";
import ChoosePay from "./ChoosePay";
import ChooseTopup from "./ChooseTopup";
import InformationCustomer from "./InformationCustomer";
import InformationTopup from "./InformationTopup";

export default function GamesTopUp() {
  const { id } = useParams();
  const games = data.find((item) => item.id === id);

  // console.log("result game: ", game); 

  return (
    <>
      <div className="container-costume mt-10 grid items-start grid-cols-1 lg:grid-cols-8 gap-5">
        {/* Kiri */}
        <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4 lg:col-span-3">
          <InformationTopup games={games} />
        </div>

        {/* Kanan */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <InformationCustomer games={games} />
          </div>
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <ChooseTopup games={games} />
          </div>
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <ChoosePay />
          </div>
        </div>
      </div>
    </>
  );
}
