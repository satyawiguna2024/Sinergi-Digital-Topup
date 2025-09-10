import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { payments } from "./payments";

export default function ChoosePay({ selectedPayment, setSelectedPayment }) {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  const handleSelect = (payment) => {
    setSelectedPayment(payment); // simpan payment yg dipilih
  };

  return (
    <>
      <div>
        <span className="flex items-center gap-2">
          <i>3️⃣</i>
          <h5 className="font-inter font-medium text-lg text-white">
            Pilih Pembayaran
          </h5>
        </span>
        <div className="w-full h-[3px] bg-slate-200 rounded-lg my-5" />

        <div className="space-y-4">
          {payments.map((item, index) => (
            <div key={index} className="bg-[rgb(39, 39, 47)] rounded-lg">
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-white"
              >
                <span className="font-inter text-sm sm:text-lg">
                  {item.title}
                </span>
                <div className="flex items-center sm:space-x-3">
                  {item.logos.map((logo) => (
                    <img
                      key={logo}
                      src={logo}
                      alt="logo"
                      className="h-3 sm:h-4 object-contain"
                    />
                  ))}
                  {open === index ? (
                    <AiOutlineUp className="w-5 h-5" />
                  ) : (
                    <AiOutlineDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Content */}
              {open === index && (
                <div className="px-4 pb-4 text-sm text-gray-300">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {item.card_detail.map((dat, it) => (
                      <button
                        key={it}
                        onClick={() =>
                          handleSelect({
                            group: item.title, // contoh: "E-Wallet"
                            name: dat.name_payment, // contoh: "Dana"
                          })
                        }
                        className={`flex justify-center items-center rounded-full size-20 p-2 border 
                        ${
                          selectedPayment?.name === dat.name_payment
                            ? "border-cyan-500 bg-cyan-100"
                            : "border-transparent bg-slate-300"
                        }`}
                      >
                        <img
                          src={item.logos[it]}
                          alt={dat.name_payment}
                          className="w-16"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="mt-3">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
