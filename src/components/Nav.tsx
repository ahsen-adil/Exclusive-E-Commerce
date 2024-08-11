"use client";

import Link from "next/link";
import Image from "next/image";
import LynkLogo from "@/../public/Lynk Logo.svg";
import { FormEvent } from "react";
import { IconContext } from "react-icons";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { PiCaretDownBold } from "react-icons/pi";
import {
  FaShirt,
  FaMobile,
  FaHouse,
  FaPaintbrush,
  FaPersonRunning,
  FaTicket,
  FaBell,
  FaClock,
} from "react-icons/fa6";

const Header = () => {
  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <IconContext.Provider value={{ size: "20" }}>
      <header className="border-1 h-24 w-screen border-b bg-white px-4 text-black">
        <nav className="container mx-auto flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
            <Image src={LynkLogo} width={24} height={24} alt="Lynk logo" />
            Lynk
          </Link>
          <div className="flex items-center gap-12">
            <ul className="flex gap-12">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="group relative">
                <p className="flex cursor-pointer items-center gap-2">
                  Categories <PiCaretDownBold size={16} />
                </p>
                <ul className="absolute z-10 flex w-max -translate-y-1/2 scale-y-0 flex-col gap-4 rounded-lg bg-white p-4 opacity-0 shadow-md transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:scale-y-100 group-hover:opacity-100">
                  <li className="">
                    <Link href="/fashion" className="flex items-center gap-4">
                      <FaShirt /> Fashion
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beauty" className="flex items-center gap-4">
                      <FaPaintbrush /> Beauty
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/electronics"
                      className="flex items-center gap-4"
                    >
                      <FaMobile /> Electronics
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/home-green"
                      className="flex items-center gap-4"
                    >
                      <FaHouse /> Home & Green
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/sports-outdoors"
                      className="flex items-center gap-4"
                    >
                      <FaPersonRunning /> Sports & Outdoors
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <p className="flex cursor-pointer items-center gap-2">
                  Deals <PiCaretDownBold size={16} />
                </p>
                <ul className="absolute z-10 flex w-max -translate-y-1/2 scale-y-0 flex-col gap-4 rounded-lg bg-white p-4 opacity-0 shadow-md transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:scale-y-100 group-hover:opacity-100">
                  <li className="">
                    <Link href="/fashion" className="flex items-center gap-4">
                      <FaClock />
                      Daily Deals
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beauty" className="flex items-center gap-4">
                      <FaBell />
                      Flash Sales
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="/electronics"
                      className="flex items-center gap-4"
                    >
                      <FaTicket /> Coupons
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <p className="flex cursor-pointer items-center gap-2">
                  Account <PiCaretDownBold size={16} />
                </p>
                <ul className="absolute z-10 flex w-max -translate-y-1/2 scale-y-0 flex-col gap-4 rounded-lg bg-white p-4 opacity-0 shadow-md transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:scale-y-100 group-hover:opacity-100">
                  <li className="">
                    <Link href="/signin">Sign In</Link>
                  </li>
                  <li className="">
                    <Link href="/signup">Create Account</Link>
                  </li>
                  <li className="">
                    <Link href="/dashboard">Account Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <p className="flex cursor-pointer items-center gap-2">
                  Help <PiCaretDownBold size={16} />
                </p>
                <ul className="absolute z-10 flex w-max -translate-y-1/2 scale-y-0 flex-col gap-4 rounded-lg bg-white p-4 opacity-0 shadow-md transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:scale-y-100 group-hover:opacity-100">
                  <li className="">
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li className="">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className="">
                    <Link href="/shipping">Shipping & Returns</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="order-first h-full items-center space-x-6 md:order-none md:flex">
              <form
                onSubmit={searchHandler}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  name="q"
                  id="searchQuery"
                  placeholder="What are you looking for?"
                  className="w-64 rounded bg-secondary px-5 py-2.5 text-xs"
                />
                <FiSearch className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
              </form>
              <div className="flex h-full items-center space-x-5">
                <Link href="/wishlist">
                  <FiHeart />
                </Link>
                <Link href="/carts">
                  <FiShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
