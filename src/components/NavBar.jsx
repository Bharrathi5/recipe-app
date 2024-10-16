import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="flex justify-between h-16 p-3 mt-3">
      <Link to="/">
        <div className="flex gap-1 mx-3 ">
          <img src="../favicon.png" alt="logo" className="w-10" />
          <h3 className="font-mono font-extrabold text-2xl">RecipeNest</h3>
        </div>
      </Link>
      <div>
        <form className="mx-3 flex flex-1 gap-2" onSubmit={handleSubmit}>
          <input
            className="border-2 border-black bg-transparent rounded-3xl w-96 h-10 p-3 text-black"
            type="text"
            placeholder="Search for recipes..."
            value={searchTerm}
            onChange={handleInput}
          />
          <button
            type="submit"
            className="border-2 border-black rounded-full w-10 justify-center"
          >
            <CiSearch className="size-6 mx-1.5" />
          </button>
        </form>
      </div>
      <div className="flex gap-5 justify-center mx-5">
        <Link to="/" className="font-semibold text-lg mx-2">
          Home
        </Link>
        <Link to="/mealtype" className="font-semibold text-lg mx-2">
          Meal Type
        </Link>
        <Link to="/cuisine" className="font-semibold text-lg mx-2">
          Cuisine
        </Link>
        <Link to="/fav">
          <FaHeart className="size-6 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
