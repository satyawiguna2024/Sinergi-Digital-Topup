import ExampleImage from "../../assets/img/gaming.png";
import Accordin from "../../components/Accordin";
import { brandMenu } from "../../hooks/brandList";

export default function Home() {
  return (
    <>
      <div className="home-section">
        <section className="container-costume">
          {/* header section */}
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-raleway text-white text-xl pt-42 font-semibold text-shadow-sm mb-5 text-center">
              Label goes here
            </h4>
            <h1 className="font-roboto text-white font-semibold text-2xl sm:text-4xl text-shadow-sm text-center">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-inter font-medium text-white text-md text-shadow-xs mt-3 sm:max-w-[450px] md:max-w-[600px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              doloribus esse, culpa itaque, consequuntur eius aspernatur enim
              minima error cumque pariatur porro laboriosam distinctio
              veritatis?
            </p>
            {/* button */}
            <div className="mt-12 space-x-3">
              <button className="px-8 py-2 bg-blue-400 hover:bg-blue-500 hover:shadow-2xl shadow-slate-50 cursor-pointer text-white rounded-full font-inter transition-all duration-300">
                Order Now
              </button>
              <button className="px-8 py-2 border text-white hover:shadow-md rounded-full font-inter transition-all duration-300 shadow-slate-100 cursor-pointer">
                Explore
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gradient">
        <section className="container-costume grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-30">
          <div className="mx-2 lg:mx-0">
            <h4 className="font-raleway text-white text-xl font-semibold text-shadow-sm mb-2 text-center md:text-start">
              Label goes here
            </h4>
            <h1 className="font-roboto text-white font-semibold text-shadow-md text-xl sm:text-2xl lg:text-3xl text-center md:text-start mb-3">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-inter font-light text-white opacity-80 text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              iste. Voluptas fuga, provident sed labore et repudiandae
              architecto magnam magni repellendus molestias suscipit adipisci
              incidunt possimus ipsum, cumque, eveniet repellat.
            </p>
          </div>

          <div className="mx-2 lg:mx-0 hidden md:block">
            <img src={ExampleImage} alt="imges" className="object-cover" />
          </div>
        </section>
      </div>

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

        <Accordin title={"What is sinergi digital?"}>
          <p>hama</p>
        </Accordin>
        <Accordin title={"What is hama?"}>
          <p>hama</p>
        </Accordin>
      </section>
    </>
  );
}
