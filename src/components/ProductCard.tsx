import Image from "next/image";

type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  discountPercentage: number;
  rating?: {
    rate: number;
    count: number;
  };
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="grid grid-rows-2">
      <Image src={props.image} width={270} height={250} alt="Product image" />
      <div className="grid grid-rows-3">
        <p className="font-medium">{props.name}</p>
        <p className="text-secondary-2">{props.price}</p>
        <p>({props.rating?.rate || 0})</p>
      </div>
    </div>
  );
};

export default ProductCard;
