export default function ChooseTopup({ games }) {
  return (
    <>
      <div>
        <span className="flex items-center gap-2">
          <i>2️⃣</i>
          <h5 className="font-inter font-medium text-lg text-white">
            Pilih Nominal Topup
          </h5>
        </span>
        <div className="w-full h-[3px] bg-slate-200 rounded-lg my-5" />

        {/* card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {games.package.map((items, index) => (
            <section key={index} className="w-full h-auto bg-white rounded-lg p-3 ">
              <h4 className="font-inter font-light text-sm">{items.name}</h4>
              <span className="flex items-center gap-1 mt-1">
                <img src={items.icon} alt="diamond" className="size-4"/>
                <p className="font-inter font-light text-xs">Rp {items.price.toLocaleString("id-ID")}</p>
              </span>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
