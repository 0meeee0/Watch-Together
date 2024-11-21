import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-black text-white border border-gray-700 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img src="/logo2.webp" alt="Logo" className="w-20 h-20 rounded-md" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Create Your Account</h1>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="w-full px-4 pt-5 pb-2 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-1 text-gray-400 text-sm transform -translate-y-1 scale-75 origin-left transition-all duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-125 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-blue-500"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="w-full px-4 pt-5 pb-2 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-1 text-gray-400 text-sm transform -translate-y-1 scale-75 origin-left transition-all duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-125 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-blue-500"
            >
              Email
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-500 text-black font-bold rounded-full hover:bg-white transition-all duration-300"
          >
            Next
          </button>
        </form>
        <p className="mt-5 text-gray-500">
          Already a member?
          <span className="text-blue-500">
            <Link to="/signin">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
