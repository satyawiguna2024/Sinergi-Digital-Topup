export default function InformationCustomer({
  games,
  customerInfo,
  setCustomerInfo,
}) {
  // handler untuk setiap input
  const handleChange = (key, value) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [key]: value, // dynamic key (misalnya "playerId", "serverId", "nomor")
    }));
  };

  return (
    <>
      <div>
        <span className="flex items-center gap-2">
          <i>1️⃣</i>
          <h5 className="font-inter font-medium text-lg text-white">
            Informasi Pelanggan
          </h5>
        </span>
        <div className="w-full h-[3px] bg-slate-200 rounded-lg my-5" />

        {/* form */}
        <form>
          {/* Player ID */}
          <div className="mb-5">
            <label
              htmlFor="playerId"
              className="block mb-2 text-sm font-inter font-medium text-white"
            >
              Masukan Player ID
            </label>

            <div
              className={`grid ${
                games.input.length > 1 ? "grid-cols-2 gap-3" : ""
              }`}
            >
              {games.input.map((field, i) => (
                <input
                  key={i}
                  type={field.type}
                  id={field.value}
                  value={customerInfo[field.value] || ""} // ambil dari state sesuai key
                  onChange={(e) => handleChange(field.value, e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={field.pholder}
                  required
                />
              ))}
            </div>
          </div>

          {/* Whatsapp input */}
          <div className="mb-5">
            <label
              htmlFor="nomor"
              className="block mb-2 text-sm font-inter font-medium text-white"
            >
              Nomor Whatsapp
            </label>

            <input
              type="number"
              id="nomor"
              value={customerInfo.nomor || ""}
              onChange={(e) => handleChange("nomor", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="089xxxxxxxxxxx"
              required
            />
          </div>
        </form>
      </div>
    </>
  );
}
