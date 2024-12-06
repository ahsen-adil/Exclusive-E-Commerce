"use client";

import Link from "next/link";
import ProductCard from "../ProductCard";
import img1 from "../../../public/game-pad.png";
import img2 from "../../../public/keyboard.png";
import img3 from "../../../public/monitor.png";
import img4 from "../../../public/chairtest.png";
import PaginationArrows from "../PaginationArrows";

const FlashSales = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-10 px-4 lg:px-12">
      {/* Title and Timer Section */}
      <div className="flex w-full flex-col items-center justify-center text-center gap-y-6 lg:flex-row lg:justify-between lg:text-left">
        {/* Title */}
        <h2 className="text-3xl font-semibold font-heading lg:text-4xl">
          Flash Sales
        </h2>

        {/* Timestamp */}
        <div className="flex items-center justify-center gap-x-4 lg:gap-x-6">
          <ul className="flex gap-x-4 text-lg lg:gap-x-3 lg:mr-[620px] lg:text-3xl">
            <li className="flex flex-col items-center font-bold">
              <span className="text-xs font-medium">Days</span>
              03 :
            </li>
            <li className="flex flex-col items-center font-bold">
              <span className="text-xs font-medium">Hours</span>
              23 :
            </li>
            <li className="flex flex-col items-center font-bold">
              <span className="text-xs font-medium">Minutes</span>
              19 :
            </li>
            <li className="flex flex-col items-center font-bold">
              <span className="text-xs font-medium">Seconds</span>
              56 
            </li>
          </ul>
          <PaginationArrows />

        </div>
      </div>

      {/* Product Grid */}
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard
          discount={40}
          name="HAVIT HV-G92 Gamepad"
          image={img1}
          price={120}
          rating={{ rate: 5, count: 88 }}
        />
        <ProductCard
          discount={0}
          name="AK-900 Wired Keyboard"
          image={img2}
          price={960}
          rating={{ rate: 4, count: 75 }}
        />
        <ProductCard
          discount={0}
          name="IPS LCD Gaming Monitor"
          image={img3}
          price={370}
          rating={{ rate: 5, count: 99 }}
        />
        <ProductCard
          discount={0}
          name="S-Series Comfort Chair"
          image={img4}
          price={375}
          rating={{ rate: 4.5, count: 99 }}
        />
      </div>

      {/* View All Products Button */}
      <Link
        href="/products"
        className="mx-auto block w-fit rounded-md bg-red-500 px-12 py-4 text-white transition-colors duration-300 hover:bg-red-600"
      >
        View All Products
      </Link>
    </div>
  );
};

export default FlashSales;
