"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { IconContext } from "react-icons";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

const Header = () => {
  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <IconContext.Provider value={{ size: "20" }}>
      <header className="border-b bg-white text-black">
        <nav className="container mx-auto flex h-16 flex-wrap items-center justify-between px-4 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-lg font-bold md:text-2xl">
            Exclusive
          </Link>

          {/* Menu Items */}
          <ul className="hidden lg:ml-[240px] flex-wrap items-center gap-6 text-sm md:flex md:gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/singup">Sign Up</Link>
            </li>
          </ul>

          {/* Search & Icons */}
          <div className="flex flex-1 items-center justify-end space-x-4 md:space-x-6">
            {/* Search */}
            <form
              onSubmit={searchHandler}
              className="relative hidden md:flex items-center"
            >
              <input
                type="text"
                name="q"
                id="searchQuery"
                placeholder="What are you looking for?"
                className="w-40 rounded bg-gray-100 px-4 py-2 text-sm md:w-64"
              />
              <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
            </form>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link href="/wishlist">
                <FiHeart />
              </Link>
              <Link href="/cart">
                <FiShoppingCart />
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block w-full bg-gray-100 p-2 text-center text-sm md:hidden">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/singup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
