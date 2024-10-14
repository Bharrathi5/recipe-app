import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className=" flex justify-evenly bg-yellow-100 h-16 p-3">
      <div className="flex justify-start gap-1 mx-3">
        <img src="../favicon.png" alt="logo" className="w-10" />
        <h3 className="font-mono text-2xl ">RecipeNest</h3>
      </div>
      <form className="mx-3 flex flex-1 gap-2">
        <input
          className="border-2 border-gray-300 bg-transparent rounded-3xl w-80 h-9 p-3 text-black"
          type="text"
          placeholder="Search for recipes..."
        />
        <button className="bg-slate-300 w-9 rounded-full justify-center">
          <CiSearch className="size-6 " />
        </button>
        <div className="flex flex-col">
          <FaHeart className="size-6" />
          <p>Favourites</p>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
