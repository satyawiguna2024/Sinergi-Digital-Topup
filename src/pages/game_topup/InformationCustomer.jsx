export default function InformationCustomer() {
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
          <div class="mb-5">
            <label
              for="playerId"
              class="block mb-2 text-sm font-inter font-medium text-gray-900 dark:text-white"
            >
              Masukan Player ID
            </label>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                id="playerId"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="User ID"
                required
              />

              <input
                type="number"
                id="serverId"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Server ID"
                required
              />
            </div>
          </div>

          {/* Whatsapp */}
          <div className="mb-5">
            <label
              for="nomor"
              class="block mb-2 text-sm font-inter font-medium text-gray-900 dark:text-white"
            >
              Nomor Whatsapp
            </label>

            <input
                type="number"
                id="nomor"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="089xxxxxxxxxxx"
                required
              />
          </div>
        </form>
      </div>
    </>
  );
}
