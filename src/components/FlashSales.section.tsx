"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ProductCard from "./ProductCard";
import PaginationArrows from "./PaginationArrows";

const FlashSales = () => {
  const handleLeft = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex w-full flex-col gap-y-10">
      <div className="flex flex-col items-center font-heading lg:flex-row lg:space-x-24">
        {/* Title */}
        <h2 className="text-4xl font-semibold">Flash Sales</h2>
        {/* Timestamp */}
        <div className="mt-2 w-fit lg:mt-4">
          <ul className="flex items-center space-x-4 text-xl lg:space-x-9 lg:text-3xl">
            <li className="flex flex-col font-bold">
              <span className="text-xs font-medium">Days</span>
              03
            </li>
            <li className="flex flex-col font-bold">
              <span className="text-xs font-medium">Hours</span>
              23
            </li>
            <li className="flex flex-col font-bold">
              <span className="text-xs font-medium">Minutes</span>
              19
            </li>
            <li className="flex flex-col font-bold">
              <span className="text-xs font-medium">Seconds</span>
              56
            </li>
          </ul>
        </div>
        {/* Arrows */}
        <PaginationArrows />
      </div>
      {/* Products */}
      <div className="flex flex-col gap-y-16 pb-16">
        <div className="grid grid-rows-1 gap-8">
          <ProductCard
            id={1}
            discountPercentage={0.4}
            name="HAVIT HV-G92 Gamepad"
            image="https://placehold.co/270x250.png"
            price={160}
          />
        </div>
        <Link
          href="/products"
          className="relative left-1/2 w-fit -translate-x-1/2 rounded-md bg-button-2 px-12 py-4 font-medium text-text"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FlashSales;
