"use client";

import { MouseEvent } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const FlashSales = () => {
  const handleLeft = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex space-x-24 font-heading w-full relative">
      <h2 className="text-4xl font-semibold">Flash Sales</h2>
      {/* Timestamp */}
      <div className="w-fit">
        <ul className="flex space-x-9 items-center">
          <li className="flex flex-col font-bold text-3xl">
            <span className="text-xs font-medium">Days</span>
            03
          </li>
          <span className="text-secondary-2 font-bold text-2xl">:</span>
          <li className="flex flex-col font-bold text-3xl">
            <span className="text-xs font-medium">Hours</span>
            23
          </li>
          <span className="text-secondary-2 font-bold text-2xl">:</span>
          <li className="flex flex-col font-bold text-3xl">
            <span className="text-xs font-medium">Minutes</span>
            19
          </li>
          <span className="text-secondary-2 font-bold text-2xl">:</span>
          <li className="flex flex-col font-bold text-3xl">
            <span className="text-xs font-medium">Seconds</span>
            56
          </li>
        </ul>
      </div>
      <div className="text-lg flex space-x-4 items-center justify-end absolute right-0">
        <button onClick={handleLeft} className="p-2 bg-gray-200 rounded-full">
          <FiArrowLeft />
        </button>
        <button onClick={handleRight} className="p-2 bg-gray-200 rounded-full">
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
