"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { IconContext } from "react-icons";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import TopHeader from "@/components/TopHeader";

const Header = () => {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <IconContext.Provider value={{ className: "text-2xl" }}>
      <TopHeader />
      <header className="border-b border-1 h-24 text-black">
        <nav className="container mx-auto flex items-center justify-between h-full">
          <Link href="/" className="font-bold text-2xl">
            Exclusive
          </Link>
          <ul className="flex space-x-12">
            <li>
              <Link href="/" className="underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
          <div className="flex justify-between itemx-center space-x-6 h-full">
            <form
              onSubmit={handleSearch}
              className="flex relative items-center"
            >
              <input
                type="text"
                name="q"
                id="searchQuery"
                placeholder="What are you looking for?"
                className="px-5 py-2.5 w-64 text-xs bg-secondary rounded"
              />
              <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>
            <div className="flex items-center h-full space-x-5">
              <Link href="/wishlist">
                <FiHeart />
              </Link>
              <Link href="/carts">
                <FiShoppingCart />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
