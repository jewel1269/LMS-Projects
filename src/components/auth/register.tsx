import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1 className="text-lg py-5">Register Your Account</h1>
      <form>
        <div>
          <label htmlFor="name">User Email: </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            className="border-2 border-teal-200 rounded-full p-2 w-full"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="name">User Name: </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            className="border-2 border-teal-200 rounded-full p-2 w-full"
          />
        </div>
        <div className="relative mt-5">
          <label htmlFor="password">Password: </label>
          <br />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter Your Password"
            className="border-2 border-teal-200 rounded-full p-2 w-full"
          />
          <div
            className="absolute right-3 top-10 cursor-pointer text-gray-500"
            onClick={togglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="flex justify-end items-center mt-5">
          <button className="border rounded-full border-gray-300 bg-teal-600 text-white p-2 px-24">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
