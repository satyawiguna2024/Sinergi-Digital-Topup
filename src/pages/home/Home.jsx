import { Element, Link } from "react-scroll";
import ExampleImage from "../../assets/img/gaming.png";
import Accordin from "../../components/Accordin";
import { brandMenu } from "../../hooks/brandList";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-section">
        <section className="container-costume">
          {/* header section */}
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-raleway text-white text-xl pt-42 font-semibold text-shadow-sm mb-5 text-center">
              ✨ Top Up Game Favoritmu ✨
            </h4>
            <h1 className="uppercase font-roboto text-white font-semibold text-2xl sm:text-4xl text-shadow-sm text-center">
              Cepat, Aman, dan Praktis!
            </h1>
            <p className="font-inter font-medium text-white text-md text-shadow-xs mt-3 sm:max-w-[450px] md:max-w-[600px] text-center">
              Nikmati pengalaman top up game dengan harga terbaik, proses
              instan, dan 100% aman. Dari Mobile Legends, Free Fire, hingga
              Genshin Impact – semua bisa kamu isi di sini tanpa ribet!
            </p>
            {/* button */}
            <div className="mt-12 space-x-3">
              <button
                onClick={() => navigate("/games")}
                className="px-8 py-2 bg-blue-400 hover:bg-blue-500 hover:shadow-2xl shadow-slate-50 text-white rounded-full font-inter transition-all duration-300 cursor-pointer"
              >
                Order Now
              </button>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                className="px-8 py-2 border text-white hover:shadow-md rounded-full font-inter transition-all duration-300 shadow-slate-100 cursor-pointer"
              >
                Explore
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Element name="about-me" className="bg-gradient">
        <section
          id="first"
          className="container-costume grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-30"
        >
          <div className="mx-2 lg:mx-0">
            <h4 className="font-raleway text-white text-xl font-semibold text-shadow-sm mb-2 text-center md:text-start">
              Tentang Kami
            </h4>
            <h1 className="uppercase font-roboto text-white font-semibold text-shadow-md text-xl sm:text-2xl lg:text-3xl text-center md:text-start mb-3">
              Sinergi Digital – Solusi Top Up Game Terpercaya
            </h1>
            <p className="font-inter font-light text-white opacity-80 text-center md:text-start">
              Sinergi Digital hadir untuk memberikan pengalaman top up game yang
              cepat, aman, dan mudah bagi semua gamer. Kami menyediakan layanan
              pengisian untuk berbagai game populer seperti Mobile Legends, Free
              Fire, PUBG Mobile, Valorant, Genshin Impact, dan masih banyak
              lagi.
              <br />
              <br />
              Dengan dukungan sistem yang aman dan proses instan, kami
              berkomitmen untuk menjadi partner terbaik para gamer dalam meraih
              kemenangan tanpa hambatan. Sinergi Digital bukan hanya sekadar
              jasa top up, tapi juga sinergi nyata antara kenyamanan, kecepatan,
              dan kepercayaan.
            </p>
          </div>

          <div className="mx-2 lg:mx-0 hidden md:block">
            <img src={ExampleImage} alt="imges" className="object-cover" />
          </div>
        </section>
      </Element>

      <section className="container-costume mt-30">
        <h1 className="font-raleway text-white text-xl uppercase font-semibold text-center md:text-start md:mx-2">
          trusted by
        </h1>
        <div className="flex items-center justify-between mt-8 flex-wrap mx-1">
          {brandMenu.map((icons, index) => (
            <i
              key={index}
              className="text-white opacity-80 text-5xl md:text-7xl md:mx-2 lg:text-8xl"
            >
              {icons.brand_icon}
            </i>
          ))}
        </div>
      </section>

      <section className="container-costume pt-40 xl:pt-60">
        <h1 className="font-raleway text-white text-xl uppercase font-semibold text-center mb-5">
          caption
        </h1>

        <Accordin title={"1. What is Sinergi Digital?"}>
          <p className="font-inter font-medium text-lg tracking-wide opacity-75">
            Sinergi Digital adalah layanan top up game terpercaya yang
            menyediakan pengisian berbagai game populer seperti Mobile Legends,
            Free Fire, PUBG Mobile, Valorant, Genshin Impact, dan banyak lagi.
          </p>
        </Accordin>

        <Accordin title={"2. Why should I top up at Sinergi Digital?"}>
          <p className="font-inter font-medium text-lg tracking-wide opacity-75">
            Kami menawarkan harga yang kompetitif, proses instan, dan transaksi
            yang 100% aman. Dengan Sinergi Digital, kamu bisa main tanpa ribet,
            cukup top up lalu langsung gas in-game!
          </p>
        </Accordin>

        <Accordin title={"3. How long does the top up process take?"}>
          <p className="font-inter font-medium text-lg tracking-wide opacity-75">
            Proses top up biasanya hanya membutuhkan waktu beberapa detik hingga
            menit saja, tergantung metode pembayaran yang kamu gunakan. Kami
            selalu berusaha memberikan layanan secepat mungkin.
          </p>
        </Accordin>

        <Accordin title={"4. What payment methods are available?"}>
          <p className="font-inter font-medium text-lg tracking-wide opacity-75">
            Sinergi Digital mendukung berbagai metode pembayaran seperti
            transfer bank, e-wallet (Dana, OVO, GoPay, ShopeePay), dan pulsa.
            Kamu bisa pilih yang paling nyaman buatmu.
          </p>
        </Accordin>

        <Accordin title={"5. Is it safe to top up at Sinergi Digital?"}>
          <p className="font-inter font-medium text-lg tracking-wide opacity-75">
            Tentu saja! Semua transaksi di Sinergi Digital dijamin aman dan
            terpercaya. Data kamu tidak akan disalahgunakan, dan kami selalu
            memprioritaskan keamanan setiap pelanggan.
          </p>
        </Accordin>
      </section>
    </>
  );
}
