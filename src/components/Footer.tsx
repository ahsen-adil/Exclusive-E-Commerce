import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="container relative mx-auto flex flex-row justify-between pb-32 pt-20">
      <div className="grid grid-cols-5">
        <div className="grid grid-rows-4">
          <h5 className="font-heading text-2xl font-bold">Exclusive</h5>
          <h6 className="text-xl font-medium">Subscribe</h6>
          <p className="">Get 10% off your first order</p>
        </div>
        <div className="grid grid-rows-4">
          <h6 className="text-xl font-medium">Support</h6>
          <p className="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="">exclusive@gmail.com</p>
          <p className="">+88015-88888-9999</p>
        </div>
        <div className="grid grid-rows-6">
          <h6 className="">Account</h6>L
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="">&copy; Copyright Rimel 2022. All right reserved</div>
    </div>
  );
};

export default Footer;
