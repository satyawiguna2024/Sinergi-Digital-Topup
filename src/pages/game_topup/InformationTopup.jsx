import { TbShieldCheckFilled } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";

export default function InformationTopup({ games }) {
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          {/* image */}
          <img src={games.image} alt={games.name} className="size-[70px] object-cover rounded-lg object-top bg-slate-800" />

          <div>
            {/* tag */}
            <h4 className="bg-blue-500 text-white font-inter font-medium rounded-full p-1 text-center">
              {games.tag}
            </h4>
            {/* title */}
            <h3 className="font-inter text-white font-medium text-lg tracking-wide mt-1">
              {games.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-8">
          <span className="flex items-center gap-x-1">
            <TbShieldCheckFilled size={18} className="text-white" />
            <h5 className="font-inter font-light text-xs text-white">
              Jaminan Layanan
            </h5>
          </span>
          <span className="flex items-center gap-x-1">
            <FaHeadphones size={15} className="text-white" />
            <h5 className="font-inter font-light text-xs text-white">
              Layanan Pelanggan 24/7
            </h5>
          </span>
        </div>

        <div className="flex items-center gap-5 mt-5">
          <span className="flex items-center gap-x-1">
            <FaUserShield size={18} className="text-white" />
            <h5 className="font-inter font-light text-xs text-white">
              Pembayaran Aman
            </h5>
          </span>
          <span className="flex items-center gap-x-1">
            <BsLightningCharge size={15} className="text-white" />
            <h5 className="font-inter font-light text-xs text-white">
              Pengiriman Instant
            </h5>
          </span>
        </div>

        <div className="w-full h-[3px] bg-slate-200 rounded-lg my-7" />

        <h5 className="font-inter font-medium text-md text-white mb-5">{games.title}</h5>
        <p className="font-inter font-light text-sm text-slate-400 max-w-[300px]">{games.information}</p>
      </div>
    </>
  );
}
