import Image from "next/image";
import Link from "next/link";
import PlayStation5Image from "@/../public/ps5-slim-goedkope-playstation_large 1.png";
import WomensCollectionImage from "@/../public/attractive-woman-wearing-hat-posing-black-background 1.png";
import SpeakersImage from "@/../public/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import PerfumeImage from "@/../public/652e82cd70aa6522dd785109a455904c.png";
import img1 from "../../../public/delivery.svg";
import img2 from "../../../public/support.svg";
import img3 from "../../../public/safety.svg";

const Featured = () => (
  <>
    <div className="space-y-16">
      <div className="flex items-center">
        <h2 className="text-3xl font-semibold text-text-2">New Arrival</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="relative h-[500px] sm:h-[600px] rounded-md bg-black p-8 text-white">
          <Image
            src={PlayStation5Image}
            alt="PlayStation 5"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          />
          <div className="flex h-full flex-col justify-end gap-4">
            <h3 className="z-10 text-2xl font-semibold">PlayStation 5</h3>
            <p className="z-10 w-[242px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href="#"
              className="z-10 w-fit font-medium underline underline-offset-8"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-8">
          <div className="relative flex flex-col justify-end space-y-4 rounded-md bg-black p-8 text-white">
            <Image
              src={WomensCollectionImage}
              alt="Women's Collection"
              className="absolute bottom-0 right-0"
            />
            <h3 className="z-10 text-2xl font-semibold">Women’s Collections</h3>
            <p className="z-10">
              Featured woman collections that give you another vibe.
            </p>
            <Link
              href="#"
              className="z-10 w-fit font-medium underline underline-offset-8"
            >
              Shop Now
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col justify-end space-y-2 rounded-md bg-black p-8 text-white">
              <Image
                src={SpeakersImage}
                alt="Speakers"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <h3 className="z-10 text-2xl font-semibold">Speakers</h3>
              <p className="z-10">Amazon wireless speakers</p>
              <Link
                href="#"
                className="z-10 w-fit font-medium underline underline-offset-8"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative flex flex-col justify-end space-y-2 rounded-md bg-black p-8 text-white">
              <Image
                src={PerfumeImage}
                alt="Perfume"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <h3 className="z-10 text-2xl font-semibold">Perfume</h3>
              <p className="z-10">GUCCI INTENSE OUD EDP</p>
              <Link
                href="#"
                className="z-10 w-fit font-medium underline underline-offset-8"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-around items-center py-12 w-full max-w-6xl lg:mt-12">
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-[#fdfbe9] rounded-full p-4 mb-4">
          <Image src={img1} alt="img" />
        </div>
        <h3 className="font-bold text-lg text-black">FREE AND FAST DELIVERY</h3>
        <p className="text-gray-600">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-[#fdfbe9] rounded-full p-4 mb-4">
          <Image src={img2} alt="img" />
        </div>
        <h3 className="font-bold text-lg text-black">24/7 CUSTOMER SERVICE</h3>
        <p className="text-gray-600">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-[#fdfbe9] rounded-full p-4 mb-4">
          <Image src={img3} alt="img" />
        </div>
        <h3 className="font-bold text-lg text-black">MONEY BACK GUARANTEE</h3>
        <p className="text-gray-600">We return money within 30 days</p>
      </div>
    </div>
  </>
);

export default Featured;
