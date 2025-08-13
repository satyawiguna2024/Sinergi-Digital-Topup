import SinergiIC from "../../assets/icons/sinergi-digital.png";

export default function CardGames() {
  return (
    <>
      <div className="mx-2 mt-6">
        <div className="grid items-center grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <div
              key={index}
              className="relative w-full h-[140px] sm:h-[180px] lg:h-[250px] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Background image */}
              <div
                className="w-full h-full bg-slate-200 transition-transform duration-500 group-hover:scale-110 flex justify-center items-center"
              >{index + 1}</div>

              {/* Overlay blur + content */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Icon */}
                <img src={SinergiIC}  className="size-16 sm:size-20 mb-2"/>
                {/* Title */}
                <p className="font-semibold text-center">Free Fire</p>
                <p className="text-sm text-gray-300">Garena</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
