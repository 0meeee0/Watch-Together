import React, { useState } from "react";

export default function Nav() {
    const [navOpen, setNavOpen] = useState(true)
    const handleNavOpen = ()=>{
         setNavOpen((prev) => !prev);
    }
  return (
    <aside
      className={`flex mt-52 items-center text-white ${
        navOpen ? "m-4 rightm" : " leftm"
      }`}
    >
      <nav className="h-56 w-20 flex-col border-2 shadow-white rounded-3xl">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            className=" cursor-pointer rounded-lg"
            src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2Fc493eac8-7853-4d3b-a5e8-013118c9ee86.png"
            alt=""
          />
        </div>
      </nav>
      <div
        onClick={handleNavOpen}
        className="ml-5 text-3 font-light text-3xl cursor-pointer"
      >
        {navOpen ? "‹" : "›"}
      </div>
    </aside>
  );
}
