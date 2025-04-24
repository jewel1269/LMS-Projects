"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#34C4BE] shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-bold text-white">TOTC</h1>
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                href="/slack"
                className="px-3 py-2 mx-3 mt-2 text-white text-lg  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href="/topics"
                className="px-3 py-2 mx-3 mt-2 text-white text-lg  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700"
              >
                Courses
              </Link>
              <Link
                href="/random"
                className="px-3 py-2 mx-3 mt-2 text-white text-lg  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700"
              >
                Careers
              </Link>
              <Link
                href="/experts"
                className="px-3 py-2 mx-3 mt-2 text-white text-lg  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700"
              >
                Blogs
              </Link>
              <Link
                href="/experts"
                className="px-3 py-2 mx-3 mt-2 text-white text-lg  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-gray-700"
              >
                About Us
              </Link>
            </div>

            <div className="flex gap-3 items-center mt-4 lg:mt-0">
              <Link href={"/authlogin"}>
                <button className="border rounded-full p-1 px-6 hover:bg-gray-300 bg-white text-black  border-gray-200">
                  Login
                </button>
              </Link>

              <Link href={"/authlogin"}>
                <button className="border-[#338b88] hover:bg-gray-300 border rounded-full p-1 px-6  text-black  ">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
