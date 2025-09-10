export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(25,25,32)] text-white px-6">
      {/* Icon/Game illustration */}
      <div className="relative">
        <img
          src="/ico/diamond.png"
          alt="diamond"
          className="w-20 h-20 animate-bounce drop-shadow-lg"
        />
        <span className="absolute -top-26 -right-6 text-pink-500 text-6xl font-extrabold">
          404
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-3xl md:text-5xl font-bold text-center">
        Oops! Halaman Tidak Ditemukan
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-400 text-center max-w-md">
        Sepertinya kamu nyasar ke tempat yang salah.  
        Jangan khawatir, kembali ke beranda dan pilih game favoritmu untuk top up.
      </p>

      {/* Button back */}
      <a
        href="/"
        className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
      >
        🔙 Kembali ke Beranda
      </a>

      {/* Extra decoration */}
      <div className="absolute bottom-10 flex gap-4 opacity-20">
        <img src="/ico/diamond.png" alt="diamond" className="w-10 h-10" />
        <img src="/ico/bag-diamond.png" alt="bag" className="w-12 h-12" />
        <img src="/ico/wdp.webp" alt="weekly pass" className="w-14 h-14" />
      </div>
    </div>
  );
}
