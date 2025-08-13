import Image1 from "../../assets/img/image1.jpg"
import Image2 from "../../assets/img/image2.jpg"
import Image3 from "../../assets/img/image3.jpg"
import Image4 from "../../assets/img/image4.jpg"
import Image5 from "../../assets/img/image5.jpg"

export default function SliderImage() {
  return (
    <>
      <div
        id="custom-controls-gallery"
        className="relative w-full mt-10"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 m-1">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Image1}
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* Item 2 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={Image2}
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Image3}
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Image4}
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Image5}
              className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
