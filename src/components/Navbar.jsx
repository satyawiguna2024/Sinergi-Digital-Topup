import SinergiIC from "../assets/icons/icon.png";

export default function Navbar() {
  return (
    <>
      <div className="bg-[rgb(50, 50, 61)] shadow shadow-slate-200">
        <nav className="container-costume p-4">
          <div className="flex items-center">
            <img src={SinergiIC} alt="Icon Sinergi Digital" className="size-8 lg:size-10" />
            <h1 className="font-raleway font-medium text-lg lg:text-xl text-white">Sinergi Digital</h1>
          </div>
        </nav>
      </div>
    </>
  );
}
