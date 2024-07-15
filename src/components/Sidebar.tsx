import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="pt-10 w-80 pr-10 border-r">
      <ul className="flex flex-col space-y-4">
        <li>
          <Link href="/womens-fashion" className="flex justify-between">
            Woman’s Fashion <FiChevronRight />
          </Link>
        </li>
        <li className="">
          <Link href="/mens-fashion" className="flex justify-between">
            Men’s Fashion <FiChevronRight />
          </Link>
        </li>
        <li>
          <Link href="/electronics">Electronics</Link>
        </li>
        <li>
          <Link href="/home-lifestyle">Home & Lifestyle</Link>
        </li>
        <li>
          <Link href="/medicine">Medicine</Link>
        </li>
        <li>
          <Link href="/sports-outdoor">Sports & Outdoor</Link>
        </li>
        <li>
          <Link href="/babys-toys">Baby’s & Toys</Link>
        </li>
        <li>
          <Link href="/groceries-pets">Groceries & Pets</Link>
        </li>
        <li>
          <Link href="/health-beauty">Health & Beauty</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
