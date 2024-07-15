import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex items-end justify-end w-full pt-10 pl-11">
      <div className="w-full h-full bg-black flex items-center relative overflow-hidden">
        <div className="flex flex-col text-white w-1/2 p-16 space-y-5">
          <div className="flex items-center">
            <FaApple className="text-5xl mr-6" />
            iPhone 14 Series
          </div>
          <h1 className="text-5xl font-semibold font-heading">
            Up to 10% off Voucher
          </h1>
          <button className="flex items-center">
            <span className="underline underline-offset-8">Shop Now</span>{" "}
            <FiArrowRight className="text-xl ml-2 font-medium" />
          </button>
        </div>
        <Image
          src="/hero_image.png"
          alt="Hero image"
          width={496}
          height={352}
          draggable={false}
          className="absolute -right-5 -bottom-5"
        />
        <div className="absolute bottom-5 right-1/2 translate-x-1/2">
          <ul className="flex space-x-3.5">
            <li>
              <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
            </li>
            <li>
              <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
            </li>
            <li>
              <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
            </li>
            <li>
              <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
            </li>
            <li>
              <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
