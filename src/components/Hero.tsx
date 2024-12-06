import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-wrap w-full pt-10">
      {/* Left Sidebar Menu */}
      <div className="hidden w-full bg-[#fdfbed] p-6 md:block md:w-1/4">
        <ul className="space-y-4 text-lg font-medium text-black">
          <li className="flex justify-between items-center">
            Woman's Fashion <span>›</span>
          </li>
          <li className="flex justify-between items-center">
            Men's Fashion <span>›</span>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      {/* Right Hero Section */}
      <div className="w-full bg-black md:w-3/4">
        <div className="relative flex flex-col-reverse items-center justify-center md:flex-row md:items-center md:justify-between">
          {/* Text Section */}
          <div className="flex flex-col items-center text-white w-full p-8 space-y-5 md:w-1/2 md:items-start md:p-16">
            <div className="flex items-center justify-center md:justify-start">
              <FaApple className="text-3xl mr-4 md:text-5xl" />
              <span className="text-xl md:text-2xl">iPhone 14 Series</span>
            </div>
            <h1 className="text-3xl font-semibold text-center font-heading md:text-5xl md:text-left">
              Up to 10% off Voucher
            </h1>
            <button className="flex items-center">
              <span className="underline underline-offset-8">Shop Now</span>
              <FiArrowRight className="text-xl ml-2 font-medium" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:w-[50%] md:h-[400px]">
            <Image
              src="/hero_image.png"
              alt="Hero image"
              layout="fill"
              objectFit="contain"
              draggable={false}
              className="absolute"
            />
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 flex space-x-3 md:bottom-5 md:right-1/2 md:translate-x-1/2">
            <button className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3"></button>
            <button className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3"></button>
            <button className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3"></button>
            <button className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3"></button>
            <button className="w-2 h-2 bg-gray-500 rounded-full md:w-3 md:h-3"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
