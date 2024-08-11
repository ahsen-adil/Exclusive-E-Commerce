import Button from "../Button";
import ProductCard from "../ProductCard";
import PaginationArrows from "../PaginationArrows";
import ImageIdeapadGaming from "@/../public/ideapad-gaming-3i-01-500x500 1.png";
import ImageCanonEOS from "@/../public/eos-250d-03-500x500 1.png";
import ImageDryDogFood from "@/../public/71RdoeXxtrL 1.png";

const OurProducts = () => {
  return (
    <div className="relative space-y-16">
      <div className="flex items-center">
        <h2 className="text-3xl font-semibold text-text-2">
          Explore Our Products
        </h2>
        <PaginationArrows />
      </div>
      <div className="">
        <ul className="flex flex-row gap-8">
          <li className="">
            <ProductCard
              discount={0}
              name="Breed Dry Dog Food"
              image={ImageDryDogFood}
              price={100}
              rating={{ rate: 3, count: 35 }}
            />
          </li>
          <li className="">
            <ProductCard
              discount={0}
              name="CANON EOS DSLR Camera"
              image={ImageIdeapadGaming}
              price={700}
              rating={{ rate: 5, count: 325 }}
            />
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Button variant="secondary">View All Products</Button>
      </div>
    </div>
  );
};

export default OurProducts;
