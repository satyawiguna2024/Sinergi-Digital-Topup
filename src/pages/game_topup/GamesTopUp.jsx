import ChoosePay from "./ChoosePay";
import ChooseTopup from "./ChooseTopup";
import InformationCustomer from "./InformationCustomer";
import InformationTopup from "./InformationTopup";

export default function GamesTopUp() {
  return (
    <>
      <div className="container-costume mt-10 grid items-start grid-cols-1 lg:grid-cols-8 gap-5">
        {/* Kiri */}
        <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4 lg:col-span-3">
          <InformationTopup />
        </div>

        {/* Kanan */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <InformationCustomer />
          </div>
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <ChooseTopup />
          </div>
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <ChoosePay />
          </div>
        </div>
      </div>
    </>
  );
}
