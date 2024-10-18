import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import Shimmer from "../components/Shimmer";
import { IoIosArrowDropdown } from "react-icons/io";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortSelection = (order) => {
    setSortOrder(order);
    setIsDropdownOpen(false);
  };

  const getRecipes = async (sort = "") => {
    try {
      setLoading(true);
      const url = sort
        ? `https://dummyjson.com/recipes?sortBy=rating&order=${sort}`
        : "https://dummyjson.com/recipes";
      const data = await fetch(url);
      const result = await data.json();
      setRecipes(result.recipes);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes(sortOrder);
  }, [sortOrder]);

  if (loading) return <Shimmer />;

  return (
    <div>
      <div className="relative">
        <button
          className="flex items-center border px-3 py-2 rounded-lg md:text-xl "
          onClick={toggleDropdown}
        >
          Sort By <IoIosArrowDropdown className="ml-2 md:size-6" />
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg border w-48">
            <ul className="flex flex-col">
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSortSelection("desc")}
              >
                Rating: High to Low
              </li>
              <li
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSortSelection("asc")}
              >
                Rating: Low to High
              </li>
            </ul>
          </div>
        )}
      </div>
      <RecipeList title="All Recipes" data={recipes} />
    </div>
  );
};

export default Home;
