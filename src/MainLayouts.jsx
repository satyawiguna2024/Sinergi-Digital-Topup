import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function MainLayouts({children}) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
