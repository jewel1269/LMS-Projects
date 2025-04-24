import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1D1E3F] text-white py-10  px-4 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-2 ">
            <div className="border border-cyan-500 rounded-md px-2 py-1 text-white font-bold">
              TOTC
            </div>
            <div className="text-left leading-tight text-md">
              <h1>Virtual Class</h1>
              <h1>For Zoom</h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-gray-500 text-lg font-bold mb-4">
            Subscribe to get our Newsletter
          </h1>
          <form className="flex justify-center items-center gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="rounded-full px-4  py-2 w-72 border border-gray-400 text-sm text-white outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-400 text-white font-medium shadow-lg px-4 py-2 hover:bg-cyan-600 transition "
            >
              Subcribe
            </button>
          </form>
        </div>

        {/* Footer Link  */}
        <div className="text-lg text-gray-400 flex flex-wrap justify-center gap-4 mt-6">
          <Link href={"/"}>Careers </Link>
          <span>|</span>
          <Link href={"/"}>Privacy and Policy</Link>
          <span>|</span>
          <Link href={"/"}>Terms and Condition</Link>
        </div>
        <p className="text-md text-gray-400 mt-2">
          © 2021 Class Technologies Inc.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
