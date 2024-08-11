"use client";

import { ReactEventHandler, SyntheticEvent, useState } from "react";
import Image from "next/image";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProductCardProps = {
  image: StaticImport;
  name: string;
  price: number;
  discount: number;
  rating?: {
    rate: number;
    count: number;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  rating,
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative flex h-[250px] w-[270px] items-center justify-center bg-secondary">
        <Image src={image} alt={name} />
        <div className="absolute right-4 top-4 flex flex-col gap-y-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary p-1">
            <FaRegHeart className="" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary p-1">
            <FiEye className="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-medium">{name}</p>
        <p className="text-red">${price}</p>
        <div className="flex gap-x-2">
          {rating &&
            Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < rating.rate ? "text-yellow" : "text-gray-300"
                }`}
              />
            ))}
          <p>({rating?.count})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
