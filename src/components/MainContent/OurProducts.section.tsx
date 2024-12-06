import Button from "../Button";
import ProductCard from "../ProductCard";
import PaginationArrows from "../PaginationArrows";
import img1 from "../../../public/dog-food.svg";
import img2 from "../../../public/camera.svg";
import img3 from "../../../public/laptop.png";
import img4 from "../../../public/cpu-cooler.svg";
import img5 from "../../../public/car.svg";
import img6 from "../../../public/football-boots.svg";
import img7 from "../../../public/game-pad-b.svg";
import img8 from "../../../public/jacket.png";
import Link from "next/link";

const OurProducts = () => {
  return (
    <div className="relative space-y-16 px-4">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold text-text-2">
          Explore Our Products
        </h2>
        <PaginationArrows />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
          discount={0}
          name="Breed Dry Dog Food"
          image={img1}
          price={100}
          rating={{ rate: 3, count: 35 }}
        />
        <ProductCard
          discount={0}
          name="CANON EOS DSLR Camera"
          image={img2}
          price={360}
          rating={{ rate: 4, count: 95 }}
        />
        <ProductCard
          discount={0}
          name="ASUS FHD Gaming Laptop"
          image={img3}
          price={700}
          rating={{ rate: 5, count: 325 }}
        />
        <ProductCard
          discount={0}
          name="Curology Prodect Set"
          image={img4}
          price={500}
          rating={{ rate: 4, count: 145 }}
        />
        <ProductCard
          discount={0}
          name="Kid Electric Car"
          image={img5}
          price={360}
          rating={{ rate: 5, count: 65 }}
        />
        <ProductCard
          discount={0}
          name="Jr. Zoom Soccer Cleats"
          image={img6}
          price={1160}
          rating={{ rate: 5, count: 35 }}
        />
        <ProductCard
          discount={0}
          name="GP11 Sooter USB Gamepad"
          image={img7}
          price={660}
          rating={{ rate: 4.5, count: 55 }}
        />
        <ProductCard
          discount={0}
          name="Quilted Satin Jacket"
          image={img8}
          price={660}
          rating={{ rate: 4.5, count: 55 }}
        />
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Link
          href="/products"
          className="rounded-md bg-button-2 px-12 py-4 font-medium text-text transition-colors duration-300 hover:bg-[#E07575]"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
