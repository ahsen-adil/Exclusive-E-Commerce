import Image from "next/image";
import img from "../../../public/banner-1.webp";

function Music() {
  return (
    // Container
    <div className="w-full flex justify-center items-center mb-8 px-4">
      {/* Content Box */}
      <div className="bg-gray-950 w-full max-w-screen-xl flex flex-col md:flex-row items-center md:justify-between md:h-[500px] rounded-lg overflow-hidden">
        {/* Left Box */}
        <div className="w-full md:w-1/2 text-center md:text-left p-6 md:p-8">
          <h3 className="text-green-500 font-bold text-lg">Categories</h3>
          <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl mt-4">
            Enhance Your <br /> Music Experience
          </h1>
          {/* Timer */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg">23</span>
              <span className="text-xs md:text-sm">Hours</span>
            </div>
            <div className="bg-gray-50 w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg">05</span>
              <span className="text-xs md:text-sm">Days</span>
            </div>
            <div className="bg-gray-50 w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg">59</span>
              <span className="text-xs md:text-sm">Minutes</span>
            </div>
            <div className="bg-gray-50 w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg">35</span>
              <span className="text-xs md:text-sm">Seconds</span>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 hidden md:inline-block px-6 py-2 text-sm text-white font-bold rounded mt-4">
            Buy Now!
          </button>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <Image src={img} width={600} height={600} alt="Music Experience" />
          <button className="bg-green-500 hover:bg-green-600 block md:hidden px-6 py-2 text-sm text-white font-bold rounded mt-4">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
