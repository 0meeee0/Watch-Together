import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="w-full flex flex-col items-center justify-center text-center px-6 pt-2">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Watch <span className="text-blue-500">Together</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-300 max-w-2xl">
          Experience seamless video sharing. Create playlists, invite friends,
          and watch your favorite videos in real time.
        </p>
      </header>

      <main className="w-full flex flex-col md:flex-row gap-2 items-center justify-center px-6 md:px-16 mt-16">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/logo2.webp"
            alt="Watch Together Logo"
            className="w-52 md:w-80 lg:w-96 object-contain shadow-lg rounded-3xl"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center text-center gap-3">
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-lg">
            Share the joy of watching videos together, no matter where you are.
            Build playlists and enjoy real-time syncing with friends and family.
          </p>
          <Link
            to="/signup"
            className="px-20 py-4 mt-2 bg-white text-black font-semibold text-lg rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
          >
            Get Started
          </Link>
          <div className="flex items-center gap-4 w-60 justify-center">
            <hr className="flex-grow border-gray-400" />
            <span className="text-gray-300">or</span>
            <hr className="flex-grow border-gray-400" />
          </div>
          <Link
            to="/signin"
            className="px-24 py-4 border-2 border-white text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-900 transition-all duration-300"
          >
            Sign in
          </Link>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
