import Image from "next/image";
import React from "react";
import OfferSection from "../pages/courses/offerSection";

const CheckOutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 lg:py-10 ">
      <div className="flex items-center justify-center gap-20">
        <div className=" bg-white p-6  rounded-xl shadow-lg border border-blue-300">
          <h2 className="text-2xl font-bold mb-4 ">Checkout</h2>
          <p className="text-sm mb-2">Cart Type</p>

          <div className="flex gap-4 mb-6">
            <Image
              width={200}
              height={200}
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="Paypal"
              className="w-16 h-auto"
            />
            <Image
              width={200}
              height={200}
              src="https://img.icons8.com/color/48/000000/amex.png"
              alt="American Express"
              className="w-16 h-auto"
            />
            <Image
              width={200}
              height={200}
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="w-16 h-auto"
            />
            <Image
              width={200}
              height={200}
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="Mastercard"
              className="w-16 h-auto"
            />
          </div>

          <form>
            <div>
              <label>Name On card</label>
              <input
                type="text"
                placeholder="Enter name on card"
                className="w-full p-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label>Card Number</label>
              <input
                type="text"
                placeholder="Enter Card Number"
                className="w-full p-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-300"
              />
            </div>
            <div className="flex items-center gap-5">
              <div>
                <label>Expiration Date ( MM/YY )</label>
                <input
                  type="text"
                  placeholder="Enter Expiration Date"
                  className="w-full p-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label>CVC</label>
                <input
                  type="text"
                  placeholder="Enter cvc Number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:right-2 focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="saveInfo"
                className="accent-blue-500"
              />
              <label htmlFor="saveInfo">
                Save my information for faster checkout
              </label>
            </div>

            <button className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-all">
              Confirm Payment
            </button>
          </form>
        </div>

        <div className="w-full md:w-[500px] bg-blue-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div>
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-2">
                <Image
                  width={200}
                  height={200}
                  src={
                    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=60"
                  }
                  alt="item"
                  className="w-16 h-16 rounded object-cover"
                />
                <hr />

                <div>
                  <h1>adipising elit, sed do eiusmod tempor</h1>
                  <p>Lorem, ipsum dolor....</p>
                  <p>$24.69</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="py-2 mt-2" />

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$51.38</span>
            </div>
            <hr className=" mt-2" />
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span>0 %</span>
            </div>
            <hr className=" mt-2" />
            <div className="flex justify-between">
              <span>Tax</span>
              <span>5</span>
            </div>
            <hr className=" mt-2" />
            <div className="flex justify-between">
              <span>Total</span>
              <span>$56.83</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-10 mt-3">
        <OfferSection />
      </div>
    </div>
  );
};

export default CheckOutPage;
