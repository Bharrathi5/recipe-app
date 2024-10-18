import React, { useState } from "react";
import { CiMenuKebab, CiSearch } from "react-icons/ci";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-16 p-3 mt-3">
      <Link to="/">
        <div className="flex items-center gap-1 md:mx-3 ">
          <img src="../favicon.png" alt="logo" className=" w-7 md:w-10" />
          <h3 className="font-mono font-extrabold md:text-2xl">RecipeNest</h3>
        </div>
      </Link>
      <div className="flex ml-5">
        <form className="mx-3 flex gap-2" onSubmit={handleSubmit}>
          <input
            className="border-2 border-black bg-transparent rounded-3xl w-44 md:w-96 h-10 p-3 text-black"
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
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex gap-5 justify-center mx-5">
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
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <CiMenuKebab className="size-11 pr-5" />
        </button>

        {isMenuOpen && (
          <div
            className="absolute top-16 left-72 w-1/3 bg-white shadow-md md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link to="/" className="block p-4">
              Home
            </Link>
            <Link to="/mealtype" className="block p-4">
              Meal Type
            </Link>
            <Link to="/cuisine" className="block p-4">
              Cuisine
            </Link>
            <Link to="/fav" className="block p-4">
              Favourites
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
