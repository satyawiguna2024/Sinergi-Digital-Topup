import data from "../../json/data.json";
import { useParams } from "react-router";
import ChoosePay from "./ChoosePay";
import ChooseTopup from "./ChooseTopup";
import InformationCustomer from "./InformationCustomer";
import InformationTopup from "./InformationTopup";
import { useState } from "react";

export default function GamesTopUp() {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({});

  const games = data.find((item) => item.id === id);
  const ADMIN_NUMBER = "6285163011367";


  const handleWhatsApp = () => {
    if (!selectedPackage || !selectedPayment || !customerInfo.nomor) {
      alert("Harap isi semua data sebelum melanjutkan!");
      return;
    }

    // Susun pesan WhatsApp
    let message = `Halo Admin, saya ingin melakukan top up:\n\n`;
    message += `🎮 Game: ${games.name}\n`;

    // ambil input dari JSON (misal userId, serverId)
    games.input.forEach((field) => {
      message += `${field.pholder}: ${customerInfo[field.value] || "-"}\n`;
    });

    message += `📱 Nomor WhatsApp Saya: ${customerInfo.nomor}\n`;
    message += `💎 Paket: ${
      selectedPackage.name
    } (Rp ${selectedPackage.price.toLocaleString("id-ID")})\n`;
    message += `💳 Metode Pembayaran: ${selectedPayment?.name || "-"}\n`;

    // encode agar aman di URL
    const encodedMessage = encodeURIComponent(message);

    // buka WhatsApp
    window.open(
      `https://wa.me/${ADMIN_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

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
            <InformationCustomer
              games={games}
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
            />
          </div>
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <ChooseTopup
              games={games}
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
            />
          </div>
          <div className="bg-[rgb(35,35,42)] shadow-cs rounded-lg p-4">
            <ChoosePay
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
            />
          </div>
          {/* button */}
          <div className="mt-5">
            <button
              onClick={handleWhatsApp}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
            >
              Lanjutkan Pemesanan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
