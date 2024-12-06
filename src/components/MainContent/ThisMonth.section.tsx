import Button from "../Button";
import ProductCard from "../ProductCard";
import PaginationArrows from "../PaginationArrows";
import img1 from "../../../public/coat.svg";
import img2 from "../../../public/duffle-bag.svg";
import img3 from "../../../public/cpu-cooler.svg";
import img4 from "../../../public/bookshelf.svg";

const OurProducts = () => {
  return (
    <div className="relative space-y-16 px-4">
      {/* Title and Pagination */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-text-2">
          Best Selling Products
        </h2>
        <PaginationArrows />
      </div>

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <ProductCard
              discount={0}
              name="The North Coat"
              image={img1}
              price={260}
              rating={{ rate: 4.5, count: 65 }}
            />
          </li>
          <li>
            <ProductCard
              discount={0}
              name="Gucci Duffle Bag"
              image={img2}
              price={960}
              rating={{ rate: 4.5, count: 65 }}
            />
          </li>
          <li>
            <ProductCard
              discount={0}
              name="RGB liquid CPU Cooler"
              image={img3}
              price={160}
              rating={{ rate: 4.5, count: 65 }}
            />
          </li>
          <li>
            <ProductCard
              discount={0}
              name="Small Bookself"
              image={img4}
              price={360}
              rating={{ rate: 5, count: 65 }}
            />
          </li>
        </ul>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <Button variant="secondary">View All Products</Button>
      </div>
    </div>
  );
};

export default OurProducts;
