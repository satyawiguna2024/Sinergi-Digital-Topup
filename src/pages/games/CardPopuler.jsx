import { Link } from "react-router";
import data from "../../json/data.json";

export default function CardPopuler() {

  const populer = [data[0], data[1], data[2], data[3]];
  return (
    <>
      <div className="mx-2 overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-[130px] gap-x-3">
          {populer.map((itm, index) => (
            <Link
              to={`/games/topup/${itm.id}`}
              key={index}
              className="w-full h-[170px] rounded-lg mt-2 flex justify-center items-center"
            >
              <img src={itm.image} alt={itm.name} className="size-full object-cover bg-cover rounded-lg" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
