"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSend } from "react-icons/fi";
import goooglePlayImage from "../../public/google-play.png";
import appStoreImage from "../../public/appstore.png";
import qrCodeImage from "../../public/Qrcode 1.png";

const Footer = () => {
  return (
    <div className="container relative mx-auto flex flex-col justify-center space-y-8 px-4 py-10 lg:flex-row lg:justify-between lg:pb-32 lg:pt-20">
      <div className="flex flex-col space-y-14 lg:grid lg:grid-cols-5">
        <div className="mb-4 grid grid-rows-4">
          <h5 className="footer-title">Exclusive</h5>
          <h6 className="text-xl font-medium">Subscribe</h6>
          <p className="">Get 10% off your first order</p>
          <form
            className="relative w-fit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="subscribe-email"
              id="subcribeEmail"
              placeholder="Enter your email"
              className="rounded border-[1.5px] bg-transparent px-4 py-3"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 lg:-translate-y-2/3"
            >
              <FiSend className="text-2xl" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <h6 className="footer-heading">Support</h6>
          <p className="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <Link href="mailto:exclusive@gmail.com" className="">
            exclusive@gmail.com
          </Link>
          <Link href="tel:+88015-88888-9999" className="">
            +88015-88888-9999
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <h6 className="footer-heading">Account</h6>
          <ul className="grid grid-rows-5 gap-4">
            <li>
              <Link href="/account">My Account</Link>
            </li>
            <li>
              <Link href="#">Login / Register</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h6 className="footer-heading">Quick Links</h6>
          <ul className="grid grid-rows-4 gap-4">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms Of Use</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h6 className="footer-heading">Download App</h6>
          <div className="flex flex-col gap-2">
            <p className="text-text/70 xl:text-sm">
              Save $3 with App New User Only
            </p>
            <div className="grid w-fit grid-cols-2">
              <Image src={qrCodeImage} alt="QR Code" />
              <div className="grid grid-rows-2">
                <button
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Image src={goooglePlayImage} alt="Google Play link image" />
                </button>
                <button
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Image src={appStoreImage} alt="App Store link image" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-primary/40 lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
};

export default Footer;
