import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { payments } from "./payments";

export default function ChoosePay() {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
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
                      <div
                        key={it}
                        className="w-full h-[150px] rounded-lg bg-slate-100 p-4"
                      >
                        {/* Ambil 1 logo sesuai index */}
                          <img
                            src={item.logos[it]}
                            alt={dat.name_payment}
                            className="w-10 h-auto object-contain"
                          />
                        <h4 className="font-inter text-md sm:text-lg font-light text-slate-700 mt-3">
                          Rp {dat.price}
                        </h4>
                        <hr className="w-full my-2 border-slate-400" />
                        <p className="font-inter text-md font-semibold text-slate-900">
                          {dat.name_payment}
                        </p>
                      </div>
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
