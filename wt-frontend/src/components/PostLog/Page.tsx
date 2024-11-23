import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Nav from "../Nav/Nav";

export default function Page() {
    const name = localStorage.getItem('name')
  return (
    <div>

    <header className="border-b border-white/10 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-white">Welcome {name}</h1>
        <button className="flex items-center border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg">
          <PlusCircleIcon className="mr-2 h-5 w-5" />
          Create Room
        </button>
      </div>
    </header>
      <Nav/>
    </div>
  );
}
