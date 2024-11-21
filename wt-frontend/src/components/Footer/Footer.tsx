import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="w-full mt-20 text-sm text-gray-500 flex flex-col items-center pb-6 cursor-pointer">
        <p>© 2024 Watch Together. All rights reserved.</p>
        <p className="text-blue-500 hover:underline">
          <Link
            to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            target="blank"
          >
            Privacy Policy Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
}
