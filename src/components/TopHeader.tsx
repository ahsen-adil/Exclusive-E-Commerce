import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="bg-black text-white flex h-16">
      <div className="container mx-auto justify-between items-center flex text-sm">
        <div className="flex justify-center w-full space-x-4">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="#" className="font-medium underline">
            Shop Now
          </Link>
        </div>
        <div className="">
          <button className="flex items-center">
            English <FiChevronDown className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
